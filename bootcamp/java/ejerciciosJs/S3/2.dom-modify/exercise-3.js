 let div = document.createElement('div');// esto crea - <div></div>
            document.body.appendChild(div)
            
            
            for (let i = 0; i < 6; i++) {
                const p = document.createElement('p')
                div.appendChild(p)
            }