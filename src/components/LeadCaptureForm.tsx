import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface LeadCaptureFormProps {
  page: string;
  buttonText?: string;
  className?: string;
}

const LeadCaptureForm = ({ page, buttonText = "Get Notified", className = "" }: LeadCaptureFormProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{ email: email.trim(), page }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already Subscribed",
            description: "This email is already on our waitlist!",
          });
        } else {
          throw error;
        }
      } else {
        // Track GA4 event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'lead_submission', {
            page_location: page,
          });
        }

        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll notify you when we launch!",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Lead submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
        disabled={isSubmitting}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : buttonText}
      </Button>
    </form>
  );
};

export default LeadCaptureForm;