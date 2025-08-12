import { http, HttpResponse } from 'msw'

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const handlers = [
  http.post('checkpassword', async ({ request }) => {
    const data = await (await request.blob(Text)).text()
    const password = data
    if (password !== '0000') {
      return HttpResponse.json({ success: false }, { status: 401 })
    }

    return HttpResponse.text('OK')
  }),

  http.get('getversion', () => {
      return HttpResponse.text('EFN70P') 
    }
  ),

  http.get('getpoestatus', () => {
      return HttpResponse.json(
        {
          Vin:generateRandomNumber(43.068, 46.068),
          Isum:generateRandomNumber(0.068, 2.068),
          Psum:generateRandomNumber(0.255, 5.255),
          Psw:generateRandomNumber(0.255, 5.255),
        }
      ) 
    }
  ),

  http.get('getpoeportstat', () => {
      return HttpResponse.json(
        [
          {
            "switch": "0",
            "port": "0",
            "poe": "1",
            "status_a": "1",
            "mode_a": "1",
            "DETECT_a": "OPEN CIRCUIT",
            "CLASS_a": "UNKNOWN",
            "Vout_a": generateRandomNumber(0.255, 35.255),
            "I_a": generateRandomNumber(0.255, 5.255),
            "P_a": generateRandomNumber(0.255, 5.255),
            "STATE_a": "OPEN",
            "status_b": "1",
            "mode_b": "1",
            "DETECT_b": "OPEN CIRCUIT",
            "CLASS_b": "UNKNOWN",
            "Vout_b": generateRandomNumber(0.255, 35.255),
            "I_b": generateRandomNumber(0.255, 5.255),
            "P_b": generateRandomNumber(0.255, 5.255),
            "STATE_b": "OPEN",
            "link": "down",
            "speed_duplex": "-"
          },
          {
            "switch": "0",
            "port": "1",
            "poe": "1",
            "status_a": "1",
            "mode_a": "1",
            "DETECT_a": "OPEN CIRCUIT",
            "CLASS_a": "UNKNOWN",
            "Vout_a": generateRandomNumber(0.255, 35.255),
            "I_a": generateRandomNumber(0.255, 5.255),
            "P_a": generateRandomNumber(0.255, 5.255),
            "STATE_a": "OPEN",
            "status_b": "1",
            "mode_b": "1",
            "DETECT_b": "OPEN CIRCUIT",
            "CLASS_b": "UNKNOWN",
            "Vout_b": generateRandomNumber(0.255, 35.255),
            "I_b": generateRandomNumber(0.255, 5.255),
            "P_b": generateRandomNumber(0.255, 5.255),
            "STATE_b": "OPEN",
            "link": "down",
            "speed_duplex": "-"
          },
          {
            "switch": "0",
            "port": "2",
            "poe": "1",
            "status_a": "1",
            "mode_a": "1",
            "DETECT_a": "OPEN CIRCUIT",
            "CLASS_a": "UNKNOWN",
            "Vout_a": generateRandomNumber(0.255, 35.255),
            "I_a": generateRandomNumber(0.255, 5.255),
            "P_a": generateRandomNumber(0.255, 5.255),
            "STATE_a": "OPEN",
            "status_b": "1",
            "mode_b": "1",
            "DETECT_b": "OPEN CIRCUIT",
            "CLASS_b": "UNKNOWN",
            "Vout_b": generateRandomNumber(0.255, 35.255),
            "I_b": generateRandomNumber(0.255, 5.255),
            "P_b": generateRandomNumber(0.255, 5.255),
            "STATE_b": "OPEN",
            "link": "down",
            "speed_duplex": "-"
          },
          {
            "switch": "0",
            "port": "3",
            "poe": "0"
          },
          {
            "switch": "0",
            "port": "4",
            "poe": "1",
            "status_a": "1",
            "mode_a": "1",
            "DETECT_a": "OPEN CIRCUIT",
            "CLASS_a": "UNKNOWN",
            "Vout_a": generateRandomNumber(0.255, 35.255),
            "I_a": generateRandomNumber(0.255, 5.255),
            "P_a": generateRandomNumber(0.255, 5.255),
            "STATE_a": "OPEN",
            "status_b": "1",
            "mode_b": "1",
            "DETECT_b": "OPEN CIRCUIT",
            "CLASS_b": "UNKNOWN",
            "Vout_b": generateRandomNumber(0.255, 35.255),
            "I_b": generateRandomNumber(0.255, 5.255),
            "P_b": generateRandomNumber(0.255, 5.255),
            "STATE_b": "OPEN",
            "link": "down",
            "speed_duplex": "-"
          },
          {
            "switch": "0",
            "port": "5",
            "poe": "1",
            "status_a": "1",
            "mode_a": "1",
            "DETECT_a": "OPEN CIRCUIT",
            "CLASS_a": "UNKNOWN",
            "Vout_a": generateRandomNumber(0.255, 35.255),
            "I_a": generateRandomNumber(0.255, 5.255),
            "P_a": generateRandomNumber(0.255, 5.255),
            "STATE_a": "OPEN",
            "status_b": "1",
            "mode_b": "1",
            "DETECT_b": "OPEN CIRCUIT",
            "CLASS_b": "UNKNOWN",
            "Vout_b": generateRandomNumber(0.255, 35.255),
            "I_b": generateRandomNumber(0.255, 5.255),
            "P_b": generateRandomNumber(0.255, 5.255),
            "STATE_b": "OPEN",
            "link": "down",
            "speed_duplex": "-"
          },
          {
            "switch": "0",
            "port": "6",
            "poe": "1",
            "status_a": "1",
            "mode_a": "1",
            "DETECT_a": "SHORT CIRCUIT",
            "CLASS_a": "UNKNOWN",
            "Vout_a": generateRandomNumber(0.255, 35.255),
            "I_a": generateRandomNumber(0.255, 5.255),
            "P_a": generateRandomNumber(0.255, 5.255),
            "STATE_a": "ERR",
            "status_b": "1",
            "mode_b": "1",
            "DETECT_b": "SHORT CIRCUIT",
            "CLASS_b": "UNKNOWN",
            "Vout_b": generateRandomNumber(0.255, 35.255),
            "I_b": generateRandomNumber(0.255, 5.255),
            "P_b": generateRandomNumber(0.255, 5.255),
            "STATE_b": "ERR",
            "link": "up",
            "speed_duplex": "1000-FD"
          },
          {
            "switch": "0",
            "port": "7",
            "poe": "1",
            "status_a": "1",
            "mode_a": "1",
            "DETECT_a": "OPEN CIRCUIT",
            "CLASS_a": "UNKNOWN",
            "Vout_a": generateRandomNumber(0.255, 35.255),
            "I_a": generateRandomNumber(0.255, 5.255),
            "P_a": generateRandomNumber(0.255, 5.255),
            "STATE_a": "OPEN",
            "status_b": "1",
            "mode_b": "1",
            "DETECT_b": "OPEN CIRCUIT",
            "CLASS_b": "UNKNOWN",
            "Vout_b": generateRandomNumber(0.255, 35.255),
            "I_b": generateRandomNumber(0.255, 5.255),
            "P_b": generateRandomNumber(0.255, 5.255),
            "STATE_b": "OPEN",
            "link": "down",
            "speed_duplex": "-"
          },
          {
            "switch": "0",
            "port": "8",
            "poe": "0"
          },
          {
            "switch": "0",
            "port": "9",
            "poe": "0"
          },
          {
            "switch": "0",
            "port": "10",
            "poe": "0"
          },
          {
            "switch": "0",
            "port": "11",
            "poe": "0"
          }
        ]
      ) 
    }
  ),
]