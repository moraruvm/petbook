window.onload = () => {
    const container = document.getElementById('container')
    axios.get("https://cat-fact.herokuapp.com/facts/").then(resp => resp.data.map(el => el.text).join('<br/>')).then(content => container.innerHTML = content)
}