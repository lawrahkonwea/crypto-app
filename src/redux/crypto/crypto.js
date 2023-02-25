import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://api.coingecko.com/api/v3/exchanges';

export const fetchCrypto = createAsyncThunk('CRYPTO', async () => {
  const response = await fetch(URL).then((res) => res);
  const data = await response.json();
  const coinList = data.map((coin) => ({
    id: coin.id,
    name: coin.name,
    year_established: coin.year_established,
    country: coin.country,
    description: coin.description,
    url: coin.url,
    image: coin.image,
    has_trading_incentive: false,
    trust_score: coin.trust_score,
    trust_score_rank: coin.trust_score_rank,
    trade_volume_24h_btc: coin.trade_volume_24h_btc,
  }));
  return coinList;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.pending, () => ({
      loading: true,
    }));
    builder.addCase(fetchCrypto.fulfilled, (state, action) => [...action.payload])
      .addDefaultCase((state) => state);
  },
});

export default cryptoSlice.reducer;
