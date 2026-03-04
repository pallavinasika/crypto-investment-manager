import { useParams, Link } from 'react-router';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

// Mock candlestick data
const priceData = [
  { time: '00:00', open: 51200, high: 51800, low: 50900, close: 51500, volume: 1200 },
  { time: '04:00', open: 51500, high: 52100, low: 51300, close: 51900, volume: 1450 },
  { time: '08:00', open: 51900, high: 52400, low: 51600, close: 52200, volume: 1680 },
  { time: '12:00', open: 52200, high: 52800, low: 51900, close: 52600, volume: 1890 },
  { time: '16:00', open: 52600, high: 53200, low: 52400, close: 52900, volume: 2100 },
  { time: '20:00', open: 52900, high: 53400, low: 52700, close: 53100, volume: 1950 },
];

const volumeData = [
  { time: '00:00', volume: 1200 },
  { time: '04:00', volume: 1450 },
  { time: '08:00', volume: 1680 },
  { time: '12:00', volume: 1890 },
  { time: '16:00', volume: 2100 },
  { time: '20:00', volume: 1950 },
];

const assetDetails: Record<string, any> = {
  bitcoin: {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 52340.21,
    change24h: 3.42,
    marketCap: 1024000000000,
    volume24h: 28500000000,
    supply: 19500000,
    high24h: 53400,
    low24h: 50900,
  },
  ethereum: {
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3312.45,
    change24h: 5.21,
    marketCap: 398000000000,
    volume24h: 15200000000,
    supply: 120000000,
    high24h: 3450,
    low24h: 3180,
  },
  solana: {
    name: 'Solana',
    symbol: 'SOL',
    price: 51.20,
    change24h: 8.34,
    marketCap: 22000000000,
    volume24h: 1200000000,
    supply: 430000000,
    high24h: 53.40,
    low24h: 48.20,
  },
};

export function AssetDetail() {
  const { id } = useParams();
  const asset = assetDetails[id || 'bitcoin'] || assetDetails.bitcoin;

  return (
    <div className="space-y-6">
      {/* Back Button and Header */}
      <div>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-semibold text-primary text-xl">
                {asset.symbol.substring(0, 2)}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">{asset.name}</h1>
              <p className="text-muted-foreground">{asset.symbol}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-semibold mb-1">
              ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center justify-end gap-1">
              {asset.change24h >= 0 ? (
                <TrendingUp className="w-5 h-5 text-profit" />
              ) : (
                <TrendingDown className="w-5 h-5 text-destructive" />
              )}
              <span
                className={`text-lg ${
                  asset.change24h >= 0 ? 'text-profit' : 'text-destructive'
                }`}
              >
                {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">Market Cap</p>
          <h3 className="text-xl font-semibold">
            ${(asset.marketCap / 1000000000).toFixed(2)}B
          </h3>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">24h Volume</p>
          <h3 className="text-xl font-semibold">
            ${(asset.volume24h / 1000000000).toFixed(2)}B
          </h3>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">24h High</p>
          <h3 className="text-xl font-semibold text-profit">
            ${asset.high24h.toLocaleString()}
          </h3>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">24h Low</p>
          <h3 className="text-xl font-semibold text-destructive">
            ${asset.low24h.toLocaleString()}
          </h3>
        </div>
      </div>

      {/* Price Chart */}
      <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">Price Chart</h3>
            <p className="text-muted-foreground text-sm">Last 24 hours</p>
          </div>
          <div className="flex gap-2">
            {['1H', '4H', '1D', '1W', '1M', '1Y'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  period === '1D'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={priceData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={['dataMin - 500', 'dataMax + 500']} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(26, 31, 58, 0.95)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)',
                }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Area
                type="monotone"
                dataKey="close"
                stroke="#6366f1"
                strokeWidth={3}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Volume Chart */}
      <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-1">Volume</h3>
          <p className="text-muted-foreground text-sm">Trading volume over time</p>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={volumeData}>
              <defs>
                <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(26, 31, 58, 0.95)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(12px)',
                }}
              />
              <Bar dataKey="volume" fill="url(#colorVolume)" radius={[4, 4, 0, 0]} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Buy/Sell Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <h3 className="text-lg font-semibold mb-4">Buy {asset.symbol}</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Amount</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-2.5 backdrop-blur-xl bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Total (USD)</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-2.5 backdrop-blur-xl bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-profit to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-profit/30 transition-all font-semibold">
              Buy {asset.symbol}
            </button>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <h3 className="text-lg font-semibold mb-4">Sell {asset.symbol}</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Amount</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-2.5 backdrop-blur-xl bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Total (USD)</label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full px-4 py-2.5 backdrop-blur-xl bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="w-full px-4 py-3 bg-gradient-to-r from-destructive to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-destructive/30 transition-all font-semibold">
              Sell {asset.symbol}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}