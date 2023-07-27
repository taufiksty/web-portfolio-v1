import { ReactNode, createContext, useState } from 'react';

interface DarkModeContextProps {
	isDarkMode: boolean;
	setIsDarkMode: (value: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
	isDarkMode: localStorage.getItem('darkMode')
		? JSON.parse(localStorage.getItem('darkMode') as string)
		: false,
	setIsDarkMode: () => {},
});

const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(
		localStorage.getItem('darkMode')
			? JSON.parse(localStorage.getItem('darkMode') as string)
			: false,
	);

	return (
		<DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeContextProvider;
