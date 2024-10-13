import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import withPlaiceholder from '@plaiceholder/next';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = withPlaiceholder({
  reactStrictMode: true,
});

export default withVanillaExtract(nextConfig);
