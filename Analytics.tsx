import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Activity, DollarSign, Target } from 'lucide-react';

const performanceData = [
  { month: 'Jan', profit: 12000, loss: -3000 },
  { month: 'Feb', profit: 15000, loss: -2000 },
  { month: 'Mar', profit: 8000, loss: -5000 },
  { month: 'Apr', profit: 22000, loss: -4000 },
  { month: 'May', profit: 18000, loss: -3500 },
  { month: 'Jun', profit: 25000, loss: -2500 },
];

const tradingActivity = [
  { day: 'Mon', trades: 45 },
  { day: 'Tue', trades: 52 },
  { day: 'Wed', trades: 38 },
  { day: 'Thu', trades: 61 },
  { day: 'Fri', trades: 55 },
  { day: 'Sat', trades: 28 },
  { day: 'Sun', trades: 35 },
];

const categoryAllocation = [
  { name: 'Layer 1', value: 45, color: '#6366f1' },
  { name: 'DeFi', value: 25, color: '#10b981' },
  { name: 'NFT', value: 15, color: '#8b5cf6' },
  { name: 'Exchange', value: 10, color: '#f59e0b' },
  { name: 'Others', value: 5, color: '#6b7280' },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold mb-2">Analytics</h1>
        <p className="text-muted-foreground">Deep insights into your portfolio</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-muted-foreground text-sm mb-2">Total Profit</p>
              <h3 className="text-2xl font-semibold text-profit mb-1">$100,000</h3>
              <p className="text-sm text-muted-foreground">+18.5% this month</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-profit to-emerald-500 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-muted-foreground text-sm mb-2">Win Rate</p>
              <h3 className="text-2xl font-semibold mb-1">68.4%</h3>
              <p className="text-sm text-muted-foreground">314 trades total</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-muted-foreground text-sm mb-2">Avg. Daily Volume</p>
              <h3 className="text-2xl font-semibold mb-1">$45,200</h3>
              <p className="text-sm text-muted-foreground">Last 30 days</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-muted-foreground text-sm mb-2">Active Trades</p>
              <h3 className="text-2xl font-semibold mb-1">12</h3>
              <p className="text-sm text-muted-foreground">Across 8 assets</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profit/Loss Chart */}
        <div className="lg:col-span-2 backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Profit & Loss Analysis</h3>
            <p className="text-muted-foreground text-sm">Monthly breakdown</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(26, 31, 58, 0.95)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                  }}
                  formatter={(value: number) => `$${Math.abs(value).toLocaleString()}`}
                />
                <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="loss" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Allocation */}
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Category Allocation</h3>
            <p className="text-muted-foreground text-sm">By sector</p>
          </div>
          <div className="h-80 flex flex-col">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {categoryAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(26, 31, 58, 0.95)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(12px)',
                    }}
                    formatter={(value: number) => `${value}%`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {categoryAllocation.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="text-muted-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trading Activity */}
      <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-1">Trading Activity</h3>
          <p className="text-muted-foreground text-sm">Number of trades per day this week</p>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={tradingActivity}>
              <defs>
                <linearGradient id="colorTrades" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(26, 31, 58, 0.95)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)',
                }}
              />
              <Line
                type="monotone"
                dataKey="trades"
                stroke="url(#colorTrades)"
                strokeWidth={3}
                dot={{ fill: '#6366f1', r: 5, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 7, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
