import { TabType } from '../types/fonts';
import clsx from 'clsx';

interface TabSelectorProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function TabSelector({ activeTab, onTabChange }: TabSelectorProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {[
          { id: 'default', name: 'Default Sizes (7-9px)' },
          { id: 'custom', name: 'Custom Size' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as TabType)}
            className={clsx(
              'py-2 px-1 border-b-2 font-medium text-sm',
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  );
}