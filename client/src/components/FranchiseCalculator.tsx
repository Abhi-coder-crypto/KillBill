import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { Calculator, DollarSign, Users, Building, TrendingUp } from "lucide-react";

type FormData = {
  investment: number;
  monthlyFees: number;
  studentCount: number;
  rent: number;
  marketing: number;
};

export default function FranchiseCalculator() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{revenue: number; expenses: number; profit: number} | null>(null);

  const form = useForm<FormData>({
    defaultValues: {
      investment: 500000,
      monthlyFees: 3000,
      studentCount: 50,
      rent: 25000,
      marketing: 10000,
    }
  });

  const onSubmit = (data: FormData) => {
    // Dummy Logic
    const monthlyRevenue = data.studentCount * data.monthlyFees;
    // Assume teacher salary is fixed per 15 students + utilities
    const teacherCount = Math.ceil(data.studentCount / 15);
    const teacherCost = teacherCount * 15000;
    const utilities = 5000;
    const monthlyExpenses = Number(data.rent) + Number(data.marketing) + teacherCost + utilities;
    const monthlyProfit = monthlyRevenue - monthlyExpenses;

    setResult({
      revenue: monthlyRevenue,
      expenses: monthlyExpenses,
      profit: monthlyProfit
    });
    setShowResult(true);
    
    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFB7B2', '#B5EAD7', '#C7CEEA', '#FFFFD8'] // Pastel colors
    });
  };

  return (
    <section id="calculator-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground flex items-center justify-center gap-3">
              <Calculator className="text-primary" /> Franchise Profit Calculator
            </h2>
            <p className="text-muted-foreground mt-2">Estimate your potential earnings with Kilbil.</p>
          </div>

          <div className="bg-background rounded-[2rem] p-8 md:p-12 shadow-soft border border-border">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Investment */}
                <div className="space-y-4">
                  <Label className="text-lg font-heading text-foreground">Initial Investment (₹)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input 
                      type="number" 
                      {...form.register("investment")} 
                      className="pl-10 h-12 text-lg rounded-xl border-2 border-muted focus:border-primary focus:ring-0 transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Monthly Fees */}
                <div className="space-y-4">
                  <Label className="text-lg font-heading text-foreground">Monthly Fee per Student (₹)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input 
                      type="number" 
                      {...form.register("monthlyFees")} 
                      className="pl-10 h-12 text-lg rounded-xl border-2 border-muted focus:border-secondary focus:ring-0 transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Student Count Slider */}
                <div className="space-y-4 md:col-span-2">
                  <div className="flex justify-between">
                    <Label className="text-lg font-heading text-foreground">Expected Students</Label>
                    <span className="font-bold text-primary text-xl">{form.watch("studentCount")}</span>
                  </div>
                  <Slider 
                    defaultValue={[50]} 
                    max={200} 
                    step={5} 
                    onValueChange={(val) => form.setValue("studentCount", val[0])}
                    className="py-4"
                  />
                  <p className="text-xs text-muted-foreground">Slide to adjust student count</p>
                </div>

                {/* Rent */}
                <div className="space-y-4">
                  <Label className="text-lg font-heading text-foreground">Monthly Rent (₹)</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input 
                      type="number" 
                      {...form.register("rent")} 
                      className="pl-10 h-12 text-lg rounded-xl border-2 border-muted focus:border-accent focus:ring-0 transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div className="space-y-4">
                  <Label className="text-lg font-heading text-foreground">Marketing Budget (₹)</Label>
                  <div className="relative">
                    <TrendingUp className="absolute left-3 top-3 text-muted-foreground" size={18} />
                    <Input 
                      type="number" 
                      {...form.register("marketing")} 
                      className="pl-10 h-12 text-lg rounded-xl border-2 border-muted focus:border-green-300 focus:ring-0 transition-all bg-white"
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-xl font-heading rounded-2xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg text-white mt-8"
              >
                Calculate My ROI 🚀
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent className="sm:max-w-md bg-white rounded-[2rem] border-0 p-0 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary p-6 text-center text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading font-bold text-center text-white">Projected Monthly ROI</DialogTitle>
              <DialogDescription className="text-white/80 text-center">
                Based on your inputs
              </DialogDescription>
            </DialogHeader>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-xl text-center border border-green-100">
                <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                <p className="text-xl font-bold text-green-600">₹{result?.revenue.toLocaleString()}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl text-center border border-red-100">
                <p className="text-sm text-muted-foreground mb-1">Expenses</p>
                <p className="text-xl font-bold text-red-500">₹{result?.expenses.toLocaleString()}</p>
              </div>
            </div>

            <div className="bg-accent/20 p-6 rounded-2xl text-center border border-accent border-dashed">
              <p className="text-sm text-foreground font-medium mb-2 uppercase tracking-wide">Net Monthly Profit</p>
              <p className="text-4xl font-heading font-extrabold text-primary">
                ₹{result?.profit.toLocaleString()}
              </p>
            </div>

            <Button onClick={() => setShowResult(false)} className="w-full rounded-xl" variant="outline">
              Close & Recalculate
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
