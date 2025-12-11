import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-secondary/20 to-background pt-16 pb-8 rounded-t-[3rem] mt-20 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-xl">
                K
              </div>
              <span className="text-2xl font-heading font-bold text-primary">
                Kilbil<span className="text-secondary">PreSchool</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Nurturing young minds with love, joy, and creativity. Join us in building a bright future for every child.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform hover:shadow-md hover:bg-primary hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform hover:shadow-md hover:bg-primary hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform hover:shadow-md hover:bg-primary hover:text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Programs', 'Gallery', 'Franchise', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-foreground">Programs</h3>
            <ul className="space-y-2">
              {['Playgroup', 'Nursery', 'Junior KG', 'Senior KG', 'Day Care'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>123 Happy Lane, Near Sunshine Park, Badlapur East, 421503</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="text-secondary shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="text-accent shrink-0" size={18} />
                <span>hello@kilbilpreschool.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2024 Kilbil PreSchool. Made with <Heart size={14} className="text-red-400 fill-red-400" /> in Badlapur.
          </p>
        </div>
      </div>
    </footer>
  );
}
