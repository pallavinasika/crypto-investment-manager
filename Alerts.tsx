import { Bell, TrendingUp, TrendingDown, AlertCircle, CheckCircle, Plus } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'price',
    icon: TrendingUp,
    title: 'Bitcoin Price Alert',
    message: 'BTC reached your target price of $52,000',
    time: '5 minutes ago',
    isRead: false,
    severity: 'success',
  },
  {
    id: 2,
    type: 'price',
    icon: TrendingDown,
    title: 'Ethereum Price Drop',
    message: 'ETH dropped below $3,200',
    time: '1 hour ago',
    isRead: false,
    severity: 'warning',
  },
  {
    id: 3,
    type: 'info',
    icon: AlertCircle,
    title: 'Market Update',
    message: 'High volatility detected in altcoin markets',
    time: '2 hours ago',
    isRead: true,
    severity: 'info',
  },
  {
    id: 4,
    type: 'success',
    icon: CheckCircle,
    title: 'Trade Executed',
    message: 'Successfully purchased 0.5 BTC at $51,800',
    time: '3 hours ago',
    isRead: true,
    severity: 'success',
  },
  {
    id: 5,
    type: 'price',
    icon: TrendingUp,
    title: 'Solana Alert',
    message: 'SOL increased by 10% in the last hour',
    time: '4 hours ago',
    isRead: true,
    severity: 'success',
  },
];

const activeAlerts = [
  {
    id: 1,
    asset: 'Bitcoin',
    symbol: 'BTC',
    condition: 'Price above',
    value: '$55,000',
    status: 'active',
  },
  {
    id: 2,
    asset: 'Ethereum',
    symbol: 'ETH',
    condition: 'Price below',
    value: '$3,000',
    status: 'active',
  },
  {
    id: 3,
    asset: 'Cardano',
    symbol: 'ADA',
    condition: 'Volume spike',
    value: '+50%',
    status: 'active',
  },
];

export function Alerts() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'success':
        return 'text-profit';
      case 'warning':
        return 'text-destructive';
      case 'info':
        return 'text-primary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Alerts</h1>
          <p className="text-muted-foreground">Stay informed about your investments</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <Plus className="w-5 h-5" />
          Create Alert
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">Unread Alerts</p>
          <h3 className="text-2xl font-semibold">2</h3>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">Active Alerts</p>
          <h3 className="text-2xl font-semibold">3</h3>
        </div>
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl p-6 shadow-2xl">
          <p className="text-muted-foreground text-sm mb-2">Triggered Today</p>
          <h3 className="text-2xl font-semibold">5</h3>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold">Recent Notifications</h3>
        </div>
        <div className="divide-y divide-border">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                className={`p-6 hover:bg-muted/30 transition-colors ${
                  !alert.isRead ? 'bg-muted/20' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-${alert.severity}/10 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${getSeverityColor(alert.severity)}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{alert.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          {alert.message}
                        </p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                      {!alert.isRead && (
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Alert Rules */}
      <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold">Active Alert Rules</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm text-muted-foreground">Asset</th>
                <th className="text-left px-6 py-4 text-sm text-muted-foreground">Condition</th>
                <th className="text-left px-6 py-4 text-sm text-muted-foreground">Value</th>
                <th className="text-left px-6 py-4 text-sm text-muted-foreground">Status</th>
                <th className="text-right px-6 py-4 text-sm text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeAlerts.map((alert) => (
                <tr
                  key={alert.id}
                  className="border-t border-border hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary text-sm">
                          {alert.symbol.substring(0, 2)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{alert.asset}</div>
                        <div className="text-sm text-muted-foreground">{alert.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{alert.condition}</td>
                  <td className="px-6 py-4 font-medium">{alert.value}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-profit/10 text-profit text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-profit"></div>
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary/80 transition-colors text-sm mr-4">
                      Edit
                    </button>
                    <button className="text-destructive hover:text-destructive/80 transition-colors text-sm">
                      Delete
                    </button>
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