import { User, Lock, Bell, Globe, Wallet, Shield } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 gap-6">
        {/* Profile Settings */}
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Profile Settings</h3>
              <p className="text-sm text-muted-foreground">Update your personal information</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Bio</label>
              <textarea
                rows={3}
                defaultValue="Crypto enthusiast and investor"
                className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Security</h3>
              <p className="text-sm text-muted-foreground">Manage your security settings</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <h4 className="font-medium mb-1">Two-Factor Authentication</h4>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <button className="px-4 py-2 bg-profit text-white rounded-lg hover:bg-profit/90 transition-colors text-sm">
                Enable
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <h4 className="font-medium mb-1">Change Password</h4>
                <p className="text-sm text-muted-foreground">Update your password regularly</p>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                Change
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <h4 className="font-medium mb-1">Active Sessions</h4>
                <p className="text-sm text-muted-foreground">Manage your active sessions</p>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm">
                View
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Notifications</h3>
              <p className="text-sm text-muted-foreground">Control your notification preferences</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {[
              { label: 'Price Alerts', description: 'Get notified when prices hit your targets' },
              { label: 'Trade Confirmations', description: 'Receive confirmation for all trades' },
              { label: 'Portfolio Updates', description: 'Daily summary of your portfolio' },
              { label: 'Market News', description: 'Stay updated with market news' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div>
                  <h4 className="font-medium mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="backdrop-blur-xl bg-card/80 border border-border rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Preferences</h3>
              <p className="text-sm text-muted-foreground">Customize your experience</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Default Currency</label>
              <select className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
                <option>JPY - Japanese Yen</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Language</label>
              <select className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Time Zone</label>
              <select className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>UTC-08:00 Pacific Time</option>
                <option>UTC-05:00 Eastern Time</option>
                <option>UTC+00:00 London</option>
                <option>UTC+01:00 Paris</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}