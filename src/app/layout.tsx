import type { Metadata } from 'next';
import { Source_Code_Pro, Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const fontSourceCodePro = Source_Code_Pro({
	subsets: ['latin'],
	variable: '--font-source-code-pro',
});

const fontSourceSans3 = Source_Sans_3({
	subsets: ['latin'],
	variable: '--font-source-sans-3',
});

const fontSourceSerif4 = Source_Serif_4({
	subsets: ['latin'],
	variable: '--font-source-serif-4',
});

export const metadata: Metadata = {
	title: 'Next.js App',
	description: 'Next.js App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={[fontSourceCodePro.variable, fontSourceSans3.variable, fontSourceSerif4.variable].join(' ')}>{children}</body>
		</html>
	);
}
