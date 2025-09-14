import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type DeviceNameState = {
  name: string | null
}

const initialState: DeviceNameState = {
  name: null
}

const slice = createSlice({
  name: "deviceName",
  initialState,
  reducers: {
    setDeviceName: (state, action: PayloadAction<DeviceNameState>) => {
      state = action.payload

      return state
    }
  }
})

export const deviceNameActions = slice.actions
export const deviceNameReducer = slice.reducer