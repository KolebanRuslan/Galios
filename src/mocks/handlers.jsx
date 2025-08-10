import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const data = await (await request.blob(Text)).text()
    console.log(data)
    const password = data
    if (password !== '0000') {
      return HttpResponse.json({ success: false }, { status: 401 })
    }

    return HttpResponse.text('OK')
  }),

  http.get('/api/poepse', () => {
      return HttpResponse.json([
        {
          id: 1,
          name: 'poe',
        }
      ]) 
    }
  ),
]