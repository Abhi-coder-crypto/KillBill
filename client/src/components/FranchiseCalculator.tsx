import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { Calculator, IndianRupee, Users, Building, TrendingUp, PieChart, BarChart3 } from "lucide-react";
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

type FormData = {
  investment: number;
  monthlyFees: number;
  studentCount: number;
  rent: number;
  marketing: number;
};

type CalculationResult = {
  revenue: number;
  expenses: number;
  profit: number;
  teacherCost: number;
  utilities: number;
  rent: number;
  marketing: number;
  yearlyRevenue: number;
  yearlyProfit: number;
  roiMonths: number;
};

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFB347', '#81C784', '#BA68C8'];

export default function FranchiseCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

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
    const monthlyRevenue = data.studentCount * data.monthlyFees;
    const teacherCount = Math.ceil(data.studentCount / 15);
    const teacherCost = teacherCount * 15000;
    const utilities = 5000;
    const monthlyExpenses = Number(data.rent) + Number(data.marketing) + teacherCost + utilities;
    const monthlyProfit = monthlyRevenue - monthlyExpenses;
    const yearlyRevenue = monthlyRevenue * 12;
    const yearlyProfit = monthlyProfit * 12;
    const roiMonths = monthlyProfit > 0 ? Math.ceil(data.investment / monthlyProfit) : 0;

    setResult({
      revenue: monthlyRevenue,
      expenses: monthlyExpenses,
      profit: monthlyProfit,
      teacherCost,
      utilities,
      rent: Number(data.rent),
      marketing: Number(data.marketing),
      yearlyRevenue,
      yearlyProfit,
      roiMonths
    });
    setShowResults(true);
    
    if (monthlyProfit > 0) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB7B2', '#B5EAD7', '#C7CEEA', '#FFFFD8']
      });
    }
  };

  const expenseBreakdownData = result ? [
    { name: 'Rent', value: result.rent, color: '#FF6B6B' },
    { name: 'Marketing', value: result.marketing, color: '#4ECDC4' },
    { name: 'Teachers', value: result.teacherCost, color: '#FFB347' },
    { name: 'Utilities', value: result.utilities, color: '#81C784' },
  ] : [];

  const profitComparisonData = result ? [
    { name: 'Monthly', revenue: result.revenue, expenses: result.expenses, profit: result.profit },
    { name: 'Quarterly', revenue: result.revenue * 3, expenses: result.expenses * 3, profit: result.profit * 3 },
    { name: 'Yearly', revenue: result.yearlyRevenue, expenses: result.expenses * 12, profit: result.yearlyProfit },
  ] : [];

  return (
    <section id="calculator-section" className="py-20 bg-gradient-to-b from-white to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-[#5D4E6D]">P&L </span>
              <span className="text-[#E57373]">C</span><span className="text-[#FFB74D]">a</span><span className="text-[#81C784]">l</span><span className="text-[#64B5F6]">c</span><span className="text-[#BA68C8]">u</span><span className="text-[#4DB6AC]">l</span><span className="text-[#FF8A65]">a</span><span className="text-[#7986CB]">t</span><span className="text-[#E57373]">o</span><span className="text-[#FFB74D]">r</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan your franchise investment with our interactive profit and loss calculator. Get instant insights into your potential earnings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-2 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-[#FF6B6B] via-[#FFB347] to-[#4ECDC4] text-white rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Calculator className="w-6 h-6" />
                    Enter Your Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <Label className="text-base font-heading text-foreground">Initial Investment</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input 
                          type="number" 
                          {...form.register("investment")} 
                          className="pl-10 h-12 text-lg rounded-xl border-2"
                          data-testid="input-investment"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-base font-heading text-foreground">Monthly Fee per Student</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input 
                          type="number" 
                          {...form.register("monthlyFees")} 
                          className="pl-10 h-12 text-lg rounded-xl border-2"
                          data-testid="input-monthly-fees"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-base font-heading text-foreground flex items-center gap-2">
                          <Users size={18} /> Expected Students
                        </Label>
                        <span className="font-bold text-[#4ECDC4] text-xl bg-[#4ECDC4]/10 px-3 py-1 rounded-full">{form.watch("studentCount")}</span>
                      </div>
                      <Slider 
                        defaultValue={[50]} 
                        max={200} 
                        min={10}
                        step={5} 
                        onValueChange={(val) => form.setValue("studentCount", val[0])}
                        className="py-4"
                        data-testid="slider-student-count"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-heading flex items-center gap-1">
                          <Building size={14} /> Monthly Rent
                        </Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-2 top-2.5 text-muted-foreground" size={14} />
                          <Input 
                            type="number" 
                            {...form.register("rent")} 
                            className="pl-7 h-10 rounded-lg border-2"
                            data-testid="input-rent"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-heading flex items-center gap-1">
                          <TrendingUp size={14} /> Marketing
                        </Label>
                        <div className="relative">
                          <IndianRupee className="absolute left-2 top-2.5 text-muted-foreground" size={14} />
                          <Input 
                            type="number" 
                            {...form.register("marketing")} 
                            className="pl-7 h-10 rounded-lg border-2"
                            data-testid="input-marketing"
                          />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-heading rounded-xl bg-gradient-to-r from-[#FF6B6B] via-[#FFB347] to-[#4ECDC4] hover:opacity-90 transition-opacity shadow-lg text-white"
                      data-testid="button-calculate-roi"
                    >
                      Calculate My ROI
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <AnimatePresence>
                {showResults && result ? (
                  <>
                    {/* Summary Cards */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="grid grid-cols-3 gap-4"
                    >
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-4 text-center">
                          <p className="text-xs text-green-600 font-medium mb-1">Monthly Revenue</p>
                          <p className="text-lg font-bold text-green-700" data-testid="text-monthly-revenue">
                            {result.revenue.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-red-50 border-red-200">
                        <CardContent className="p-4 text-center">
                          <p className="text-xs text-red-600 font-medium mb-1">Monthly Expenses</p>
                          <p className="text-lg font-bold text-red-700" data-testid="text-monthly-expenses">
                            {result.expenses.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                          </p>
                        </CardContent>
                      </Card>
                      <Card className={`${result.profit >= 0 ? 'bg-[#4ECDC4]/10 border-[#4ECDC4]' : 'bg-orange-50 border-orange-200'}`}>
                        <CardContent className="p-4 text-center">
                          <p className={`text-xs font-medium mb-1 ${result.profit >= 0 ? 'text-[#4ECDC4]' : 'text-orange-600'}`}>Monthly Profit</p>
                          <p className={`text-lg font-bold ${result.profit >= 0 ? 'text-[#3BA99C]' : 'text-orange-700'}`} data-testid="text-monthly-profit">
                            {result.profit.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* ROI Timeline */}
                    {result.profit > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Card className="bg-gradient-to-r from-[#FF6B6B]/10 via-[#FFB347]/10 to-[#4ECDC4]/10 border-2 border-dashed border-[#FFB347]">
                          <CardContent className="p-6 text-center">
                            <p className="text-sm text-muted-foreground mb-2">Estimated ROI Recovery</p>
                            <p className="text-4xl font-heading font-bold text-[#FF6B6B]" data-testid="text-roi-months">
                              {result.roiMonths} Months
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">to recover your initial investment</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}

                    {/* Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Expense Breakdown Pie Chart */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <PieChart size={16} className="text-[#FF6B6B]" />
                              Expense Breakdown
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ResponsiveContainer width="100%" height={180}>
                              <RechartsPie>
                                <Pie
                                  data={expenseBreakdownData}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={40}
                                  outerRadius={70}
                                  paddingAngle={3}
                                  dataKey="value"
                                >
                                  {expenseBreakdownData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip 
                                  formatter={(value: number) => value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                                />
                                <Legend 
                                  wrapperStyle={{ fontSize: '10px' }}
                                  layout="horizontal"
                                  verticalAlign="bottom"
                                />
                              </RechartsPie>
                            </ResponsiveContainer>
                          </CardContent>
                        </Card>
                      </motion.div>

                      {/* Revenue vs Profit Bar Chart */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center gap-2">
                              <BarChart3 size={16} className="text-[#4ECDC4]" />
                              Projected Growth
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ResponsiveContainer width="100%" height={180}>
                              <BarChart data={profitComparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                                <YAxis tick={{ fontSize: 10 }} tickFormatter={(value) => `${(value/1000)}k`} />
                                <Tooltip 
                                  formatter={(value: number) => value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                                />
                                <Bar dataKey="revenue" fill="#81C784" name="Revenue" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="profit" fill="#4ECDC4" name="Profit" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            </ResponsiveContainer>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    {/* Yearly Summary */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Card className="bg-[#5D4E6D] text-white">
                        <CardContent className="p-6">
                          <div className="grid grid-cols-2 gap-6 text-center">
                            <div>
                              <p className="text-white/70 text-sm mb-1">Yearly Revenue</p>
                              <p className="text-2xl font-bold" data-testid="text-yearly-revenue">
                                {result.yearlyRevenue.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                              </p>
                            </div>
                            <div>
                              <p className="text-white/70 text-sm mb-1">Yearly Profit</p>
                              <p className="text-2xl font-bold text-[#4ECDC4]" data-testid="text-yearly-profit">
                                {result.yearlyProfit.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full min-h-[400px] bg-muted/20 rounded-2xl border-2 border-dashed border-muted"
                  >
                    <Calculator className="w-16 h-16 text-muted-foreground/40 mb-4" />
                    <p className="text-muted-foreground text-lg font-medium">Enter your details</p>
                    <p className="text-muted-foreground/60 text-sm">to see your projected earnings</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
