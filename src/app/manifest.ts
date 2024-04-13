import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: process.env.APP_TITLE,
		short_name: process.env.APP_TITLE,
		description: process.env.APP_TITLE,
		start_url: '/',
		display: 'standalone',
		background_color: '#FFFFFF',
		theme_color: '#88DD00',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
			{
				src: '/icon.svg',
				sizes: 'any',
				type: 'image/svg+xml',
			},
			{
				src: '/icon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				src: '/icon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				src: '/icon-48x48.png',
				sizes: '48x48',
				type: 'image/png',
			},
			{
				src: '/icon-72x72.png',
				sizes: '72x72',
				type: 'image/png',
			},
			{
				src: '/icon-96x96.png',
				sizes: '96x96',
				type: 'image/png',
			},
			{
				src: '/icon-128x128.png',
				sizes: '128x128',
				type: 'image/png',
			},
			{
				src: '/icon-152x152.png',
				sizes: '152x152',
				type: 'image/png',
			},
			{
				src: '/icon-167x167.png',
				sizes: '167x167',
				type: 'image/png',
			},
			{
				src: '/icon-180x180.png',
				sizes: '180x180',
				type: 'image/png',
			},
			{
				src: '/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/icon-256x256.png',
				sizes: '256x256',
				type: 'image/png',
			},
			{
				src: '/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
