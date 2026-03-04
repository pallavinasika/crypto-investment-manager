import { TrendingUp, TrendingDown, Search } from 'lucide-react';
import { Link } from 'react-router';

const marketData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 52340.21,
    change24h: 3.42,
    volume24h: 28500000000,
    marketCap: 1024000000000,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3312.45,
    change24h: 5.21,
    volume24h: 15200000000,
    marketCap: 398000000000,
  },
  {
    id: 'binance-coin',
    name: 'BNB',
    symbol: 'BNB',
    price: 412.80,
    change24h: 2.15,
    volume24h: 1200000000,
    marketCap: 63000000000,
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 51.20,
    change24h: 8.34,
    volume24h: 1200000000,
    marketCap: 22000000000,
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.68,
    change24h: -2.15,
    volume24h: 450000000,
    marketCap: 24000000000,
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.63,
    change24h: 1.82,
    volume24h: 980000000,
    marketCap: 34000000000,
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    price: 6.92,
    change24h: 1.23,
    volume24h: 280000000,
    marketCap: 9200000000,
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    symbol: 'AVAX',
    price: 16.20,
    change24h: -3.45,
    volume24h: 320000000,
    marketCap: 6100000000,
  },
];

export function Markets() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Markets</h1>
          <p className="text-muted-foreground">Explore crypto market trends</p>
        </div>
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search markets..."
            className="w-full pl-10 pr-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">Global Market Cap</p>
          <h3 className="text-2xl font-semibold">$2.18T</h3>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp className="w-4 h-4 text-profit" />
            <span className="text-sm text-profit">+4.2%</span>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">24h Trading Volume</p>
          <h3 className="text-2xl font-semibold">$89.5B</h3>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp className="w-4 h-4 text-profit" />
            <span className="text-sm text-profit">+12.8%</span>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">BTC Dominance</p>
          <h3 className="text-2xl font-semibold">47.2%</h3>
          <div className="flex items-center gap-1 mt-2">
            <TrendingDown className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive">-0.8%</span>
          </div>
        </div>
      </div>

      {/* Markets Table */}
      <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="text-lg font-semibold">All Cryptocurrencies</h3>
          <div className="flex gap-2">
            {['All', 'Favorites', 'DeFi', 'NFT', 'Metaverse'].map((filter) => (
              <button
                key={filter}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  filter === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm text-muted-foreground">#</th>
                <th className="text-left px-6 py-4 text-sm text-muted-foreground">Name</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Price</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">24h Change</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Market Cap</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Volume (24h)</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground"></th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((asset, index) => (
                <tr
                  key={asset.id}
                  className="border-t border-border hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 text-muted-foreground">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary text-sm">
                          {asset.symbol.substring(0, 2)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{asset.name}</div>
                        <div className="text-sm text-muted-foreground">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {asset.change24h >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-profit" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                      <span
                        className={`${
                          asset.change24h >= 0 ? 'text-profit' : 'text-destructive'
                        }`}
                      >
                        {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    ${(asset.marketCap / 1000000000).toFixed(2)}B
                  </td>
                  <td className="px-6 py-4 text-right">
                    ${(asset.volume24h / 1000000000).toFixed(2)}B
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to={`/asset/${asset.id}`}
                      className="text-primary hover:text-primary/80 transition-colors text-sm"
                    >
                      Trade
                    </Link>
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