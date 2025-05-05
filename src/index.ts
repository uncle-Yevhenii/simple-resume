import { TabsComponentProps, ToggleThemeProps } from './type.js';

export function tabsComponent({ tabsComponent }: TabsComponentProps) {
    if (!tabsComponent) {
        throw new Error('Tabs container element not found');
    }

    const tabButtons = tabsComponent.querySelectorAll('.tab-button');
    const tabContents = tabsComponent.querySelectorAll('.tab-content');

    const openTab = (tabId: string) => {
        tabButtons.forEach((button) => button.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        const selectedTabButton = tabsComponent.querySelector(`.tab-button[data-tab="${tabId}"]`);
        const selectedTabContent = tabsComponent.querySelector(`#${tabId}`);

        if (selectedTabButton && selectedTabContent) {
            selectedTabButton.classList.add('active');
            selectedTabContent.classList.add('active');
        }
    };

    tabButtons.forEach((button) => {
        button.addEventListener('click', () =>
            openTab((button as HTMLButtonElement).dataset.tab || '')
        );
    });
}

export function toggleTheme({ toggleTheme }: ToggleThemeProps) {
    toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark_mode');
    });
}

export function toggleFavicon({ faviconTag }: any) {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)');

    const changeFavicon = () => {
        if (isDark.matches) faviconTag.href = './favicon/dark.svg';
        else faviconTag.href = './favicon/light.svg';
    };

    changeFavicon();
    setInterval(changeFavicon, 1000);
}
