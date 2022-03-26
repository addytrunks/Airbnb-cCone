/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['links.papareact.com','wallpapercave.com']
  },
  env:{
    mapbox_key:'pk.eyJ1IjoiYWRkeS10cnVua3MiLCJhIjoiY2wxN3RvNnhqMGtsODNqcGtzY3FxeTFuNiJ9.kk7Fi7ACWiQSUoCxCW6pYQ'
  }
}

module.exports = nextConfig
