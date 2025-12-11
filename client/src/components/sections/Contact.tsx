import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary-foreground font-bold text-sm">
              Get in Touch
            </div>
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Have Questions? <br /> We'd Love to Hear From You!
            </h2>
            <p className="text-muted-foreground text-lg">
              Visit our campus or drop us a message. We are happy to answer any queries about admissions, programs, or franchise opportunities.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MapPin />, text: "123 Happy Lane, Near Sunshine Park, Badlapur East, 421503", color: "bg-primary" },
                { icon: <Phone />, text: "+91 98765 43210", color: "bg-secondary" },
                { icon: <Mail />, text: "hello@kilbilpreschool.com", color: "bg-accent" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                    {item.icon}
                  </div>
                  <p className="text-lg font-medium pt-2 text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-background p-8 rounded-[2rem] shadow-soft border border-border">
            <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Parent Name" className="h-12 rounded-xl bg-white" />
                <Input placeholder="Child's Name" className="h-12 rounded-xl bg-white" />
              </div>
              <Input placeholder="Phone Number" className="h-12 rounded-xl bg-white" />
              <Input placeholder="Email Address" className="h-12 rounded-xl bg-white" />
              <Textarea placeholder="How can we help you?" className="min-h-[120px] rounded-xl bg-white" />
              <Button className="w-full h-12 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold text-lg">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
