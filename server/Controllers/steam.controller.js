import axios from 'axios';

export const games = async (req, res) => {
    const { appid } = req.params;
  
    try {
      // Fazer a requisição à API da Steam
      const response = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appid}`);
      const data = response.data;
      
      if (data[appid].success) {
        const jogo = data[appid].data;
        
        // Mapear e retornar os dados desejados
        const infos = {
          name: jogo.name,
          description: jogo.short_description,
          free: jogo.is_free,
          image: jogo.header_image,
          age: jogo.required_age

        };
        
        res.json(infos);
      } else {
        throw new Error('Jogo não encontrado.');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter detalhes do jogo.' });
    }
  };
  

