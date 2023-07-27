import { ReactNode, createContext, useState } from 'react';

interface DarkModeContextProps {
	isDarkMode: boolean;
	setIsDarkMode: (value: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
	isDarkMode: false,
	setIsDarkMode: () => {},
});

const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	return (
		<DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeContextProvider;
