
const fetchFromServer = async () => {
  const response = await fetch('http://127.0.0.1:44444')
  return response.text()
}

const main = async () => {
  let i = 0
  while (true) {
    const response = await fetchFromServer()
    console.log(response, i++)
  }
}

main()