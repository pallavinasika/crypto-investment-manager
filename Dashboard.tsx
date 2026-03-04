import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Coins, 
  Trophy 
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { Link } from 'react-router';

const kpiData = [
  {
    title: 'Total Portfolio Value',
    value: '$284,562.48',
    change: '+12.5%',
    isPositive: true,
    icon: Wallet,
  },
  {
    title: '24h Change',
    value: '+$15,234.12',
    change: '+5.67%',
    isPositive: true,
    icon: TrendingUp,
  },
  {
    title: 'Total Assets',
    value: '12',
    change: '+2 this month',
    isPositive: true,
    icon: Coins,
  },
  {
    title: 'Best Performer',
    value: 'ETH',
    change: '+18.3%',
    isPositive: true,
    icon: Trophy,
  },
];

const performanceData = [
  { date: 'Jan', value: 185000 },
  { date: 'Feb', value: 195000 },
  { date: 'Mar', value: 178000 },
  { date: 'Apr', value: 210000 },
  { date: 'May', value: 225000 },
  { date: 'Jun', value: 240000 },
  { date: 'Jul', value: 265000 },
  { date: 'Aug', value: 284562 },
];

const allocationData = [
  { name: 'Bitcoin', value: 45, color: '#2962FF' },
  { name: 'Ethereum', value: 30, color: '#10b981' },
  { name: 'Cardano', value: 12, color: '#8b5cf6' },
  { name: 'Solana', value: 8, color: '#f59e0b' },
  { name: 'Others', value: 5, color: '#6b7280' },
];

const holdings = [
  {
    id: 'bitcoin',
    asset: 'Bitcoin',
    symbol: 'BTC',
    quantity: 2.45,
    price: 52340.21,
    change24h: 3.42,
    value: 128233.51,
    allocation: 45,
  },
  {
    id: 'ethereum',
    asset: 'Ethereum',
    symbol: 'ETH',
    quantity: 25.8,
    price: 3312.45,
    change24h: 5.21,
    value: 85441.21,
    allocation: 30,
  },
  {
    id: 'cardano',
    asset: 'Cardano',
    symbol: 'ADA',
    quantity: 50000,
    price: 0.68,
    change24h: -2.15,
    value: 34000.00,
    allocation: 12,
  },
  {
    id: 'solana',
    asset: 'Solana',
    symbol: 'SOL',
    quantity: 450,
    price: 51.20,
    change24h: 8.34,
    value: 23040.00,
    allocation: 8,
  },
  {
    id: 'polkadot',
    asset: 'Polkadot',
    symbol: 'DOT',
    quantity: 2000,
    price: 6.92,
    change24h: 1.23,
    value: 13840.00,
    allocation: 5,
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div
              key={index}
              className="backdrop-blur-xl bg-gradient-to-br from-card/90 to-card/50 border border-border rounded-xl p-6 shadow-2xl hover:shadow-primary/20 transition-all hover:scale-105"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm mb-2">{kpi.title}</p>
                  <h3 className="text-3xl font-bold mb-1 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{kpi.value}</h3>
                  <div className="flex items-center gap-1">
                    {kpi.isPositive ? (
                      <TrendingUp className="w-4 h-4 text-profit" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    )}
                    <span
                      className={`text-sm font-semibold ${
                        kpi.isPositive ? 'text-profit' : 'text-destructive'
                      }`}
                    >
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2 backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Portfolio Performance</h3>
            <p className="text-muted-foreground text-sm">Last 8 months</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(26, 31, 58, 0.95)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                  }}
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#colorValue)"
                  strokeWidth={4}
                  dot={{ fill: '#6366f1', r: 5, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 7, strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Allocation Chart */}
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Asset Allocation</h3>
            <p className="text-muted-foreground text-sm">Portfolio distribution</p>
          </div>
          <div className="h-80 flex flex-col">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
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
              {allocationData.map((item, index) => (
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

      {/* Top Holdings Table */}
      <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold">Top Holdings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 backdrop-blur-xl">
              <tr>
                <th className="text-left px-6 py-4 text-sm text-muted-foreground">Asset</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Quantity</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Price</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">24h Change</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Value</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Allocation</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding) => (
                <tr
                  key={holding.id}
                  className="border-t border-border hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <Link to={`/asset/${holding.id}`} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <span className="font-semibold text-white text-sm">
                          {holding.symbol.substring(0, 2)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{holding.asset}</div>
                        <div className="text-sm text-muted-foreground">{holding.symbol}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {holding.quantity.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    ${holding.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`flex items-center justify-end gap-1 ${
                        holding.change24h > 0 ? 'text-profit' : 'text-destructive'
                      }`}
                    >
                      {holding.change24h > 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      {Math.abs(holding.change24h)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    ${holding.value.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: `${holding.allocation}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-8">
                        {holding.allocation}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}