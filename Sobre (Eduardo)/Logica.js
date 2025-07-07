 let indiceAtual = 0;

        const insta= [
            "@eduardo_lucas48",
            "@eae_rush1",
            "@matzu_mag",
            "@soviet069"
        ]

        const contato = [
            "eduardo.fonseca@ufv.br",
            "jeferson.juliano@ufv.br",
            "mateus.h.santos@ufv.br",
            "luis.m.alves@ufv.br"
        ]

        const texto = [
            "Estudante em formação do curso Técnico em\nInformática pela Universidade Federal de Viçosa,\nconcomitante ao ensino médio pela E.E. Serafim\nRibeiro de Rezende. Gostei muito de fazer parte desse\ntrabalho pois ele proporcionou muitas experiências\nque jamais esquecerei!",
            "Estudante em formação do curso Técnico em\nInformática pela Universidade Federal de Viçosa,\nconcomitante ao ensino médio pela E.E. Serafim\nRibeiro de Rezende. Gosto muito da área da tecnologia\ne da computação, quero seguir nessa área mediante\nos meus conhecimentos do curso e uma futura graduação.",
            "Estudante em formação do curso Técnico em\nInformática pela Universidade Federal de Viçosa,\nconcomitante ao ensino médio pela E.E. Serafim\nRibeiro de Rezende. Aprofundei os meus conhecimentos\nem CSS através do trabalho, que me proporcionou\ndiversos desafios e risadas.",
            "Estudante em formação do curso Técnico em\nInformática pela Universidade Federal de Viçosa,\nconcomitante ao ensino médio pela E.E. Serafim\nRibeiro de Rezende. Foi legal a experiência de participar\ndesse projeto, principalmente a parte de ficar\nem chamadas pelo Discord com o grupo!"

        ]

        const titulo=[
            "Eduardo Lucas Leite Fonseca",
            "Jeferson Juliano dos Santos",
            "Mateus Henrique Malagutte Santos",
            "Luis Miguel Moraes Alves"
        ]

        const imagens=[
            "imagens/Eduardo_imagem1.jpg",
            "imagens/Jeferson_imagem.jpg",
            "imagens/Mateus_imagem.jpg",
            "imagens/Luis_imagem.jpg"
        ]

        const contatinho = document.getElementById('contato');
        const instagram = document.getElementById('contato_0');
        const tetexto = document.getElementById('texto');
        const titexto = document.getElementById('titulo');
        const image = document.getElementById('perfil');
        const probotao = document.getElementById('botao');
        const antbotao = document.getElementById('botao_voltar');

        function mudarperfil(){

            contatinho.textContent = contato[indiceAtual];
            instagram.textContent = insta[indiceAtual];
            tetexto.textContent = texto[indiceAtual]; 
            titexto.textContent = titulo[indiceAtual];
            image.src = imagens[indiceAtual];

            if(indiceAtual === titulo.length - 1){
                probotao.style.display = 'none';
            }else{
                probotao.style.display = 'block';
            }

            if(indiceAtual > 0){
                antbotao.style.display = 'block';
            }else{
                antbotao.style.display = 'none';
            }
        }

        function proximo(){
            
                if(indiceAtual < titulo.length -1){
                    indiceAtual++;
                    mudarperfil();
                }
            }
        function voltar(){
                if(indiceAtual > 0){
                    indiceAtual--;  
                    mudarperfil();                         
                }
                   
                
            }


            mudarperfil();
    
        probotao.addEventListener('click', proximo);
        antbotao.addEventListener('click', voltar);
