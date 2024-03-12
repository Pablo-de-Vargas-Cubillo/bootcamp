const alumns = [
    { name: 'pepe viruela', t1: false, t2: false, t3: true },{name:'lucia aranda', t1: true, t2:false, t3:true},{name:'Abel Roman', t1: true, t2:true, t3:true},{name:'pedro picapiedra', t1: true, t2:false, t3:true}
]

for (let alumno of alumns) {
    // console.log(alumno);
    let trimestres = 0;
    if (alumno.T1 === true) {
        trimestres++// cuento los trimestres
    }
    if (alumno.T2) {
        trimestres++
    }
    if (alumno.T3) {
        trimestres++
    } // console.log(trimestres);
    if (trimestres >= 2) {
        alumno.isApproved = true
    } else {
        alumno.isApproved = false
    }
}
console.log(alumns);