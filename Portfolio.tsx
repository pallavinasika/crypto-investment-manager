import { Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { Link } from 'react-router';

const portfolioAssets = [
  {
    id: 'bitcoin',
    asset: 'Bitcoin',
    symbol: 'BTC',
    quantity: 2.45,
    avgPrice: 48200.50,
    currentPrice: 52340.21,
    profitLoss: 8.6,
    totalValue: 128233.51,
  },
  {
    id: 'ethereum',
    asset: 'Ethereum',
    symbol: 'ETH',
    quantity: 25.8,
    avgPrice: 2850.30,
    currentPrice: 3312.45,
    profitLoss: 16.2,
    totalValue: 85441.21,
  },
  {
    id: 'cardano',
    asset: 'Cardano',
    symbol: 'ADA',
    quantity: 50000,
    avgPrice: 0.72,
    currentPrice: 0.68,
    profitLoss: -5.6,
    totalValue: 34000.00,
  },
  {
    id: 'solana',
    asset: 'Solana',
    symbol: 'SOL',
    quantity: 450,
    avgPrice: 42.15,
    currentPrice: 51.20,
    profitLoss: 21.5,
    totalValue: 23040.00,
  },
  {
    id: 'polkadot',
    asset: 'Polkadot',
    symbol: 'DOT',
    quantity: 2000,
    avgPrice: 6.45,
    currentPrice: 6.92,
    profitLoss: 7.3,
    totalValue: 13840.00,
  },
  {
    id: 'chainlink',
    asset: 'Chainlink',
    symbol: 'LINK',
    quantity: 800,
    avgPrice: 14.20,
    currentPrice: 15.80,
    profitLoss: 11.3,
    totalValue: 12640.00,
  },
  {
    id: 'avalanche',
    asset: 'Avalanche',
    symbol: 'AVAX',
    quantity: 500,
    avgPrice: 18.50,
    currentPrice: 16.20,
    profitLoss: -12.4,
    totalValue: 8100.00,
  },
  {
    id: 'polygon',
    asset: 'Polygon',
    symbol: 'MATIC',
    quantity: 10000,
    avgPrice: 0.82,
    currentPrice: 0.89,
    profitLoss: 8.5,
    totalValue: 8900.00,
  },
];

export function Portfolio() {
  const totalValue = portfolioAssets.reduce((sum, asset) => sum + asset.totalValue, 0);
  const totalProfitLoss = portfolioAssets.reduce((sum, asset) => {
    const profitLossValue = asset.totalValue - (asset.quantity * asset.avgPrice);
    return sum + profitLossValue;
  }, 0);
  const totalProfitLossPercent = (totalProfitLoss / (totalValue - totalProfitLoss)) * 100;

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Portfolio</h1>
          <p className="text-muted-foreground">Manage your crypto investments</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <Plus className="w-5 h-5" />
          Add Asset
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">Total Value</p>
          <h3 className="text-2xl font-semibold">${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">Total Profit/Loss</p>
          <div className="flex items-baseline gap-2">
            <h3 className={`text-2xl font-semibold ${totalProfitLoss >= 0 ? 'text-profit' : 'text-destructive'}`}>
              {totalProfitLoss >= 0 ? '+' : ''}${totalProfitLoss.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h3>
            <span className={`text-sm ${totalProfitLoss >= 0 ? 'text-profit' : 'text-destructive'}`}>
              ({totalProfitLoss >= 0 ? '+' : ''}{totalProfitLossPercent.toFixed(2)}%)
            </span>
          </div>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">Number of Assets</p>
          <h3 className="text-2xl font-semibold">{portfolioAssets.length}</h3>
        </div>
      </div>

      {/* Assets Table */}
      <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold">Your Assets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm text-muted-foreground">Asset</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Quantity</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Avg Price</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Current Price</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Profit/Loss %</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Total Value</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {portfolioAssets.map((asset) => (
                <tr
                  key={asset.id}
                  className="border-t border-border hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary text-sm">
                          {asset.symbol.substring(0, 2)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{asset.asset}</div>
                        <div className="text-sm text-muted-foreground">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {asset.quantity.toLocaleString(undefined, { 
                      minimumFractionDigits: asset.quantity < 10 ? 2 : 0,
                      maximumFractionDigits: asset.quantity < 10 ? 2 : 0 
                    })}
                  </td>
                  <td className="px-6 py-4 text-right text-muted-foreground">
                    ${asset.avgPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    ${asset.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      {asset.profitLoss >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-profit" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-destructive" />
                      )}
                      <span
                        className={`font-medium ${
                          asset.profitLoss >= 0 ? 'text-profit' : 'text-destructive'
                        }`}
                      >
                        {asset.profitLoss >= 0 ? '+' : ''}{asset.profitLoss}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-semibold">
                    ${asset.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link 
                      to={`/asset/${asset.id}`}
                      className="text-primary hover:text-primary/80 transition-colors text-sm"
                    >
                      View Details
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