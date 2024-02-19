const express = require('express');
const router = express.Router();
const voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

//ajouter
router.post('/create',(req,res)=>{
    const voiture = req.body;
    voitures.push(voiture);
    res.json(voiture);
   
})
//lister
router.get('/all',(req,res)=>{
  console.log("test my request ")
    res.json(voitures);

})

//lister a travers parametres
router.get('/:id',(req,res)=>{
    const voitureId = parseInt(req.params.id);
    const voiture = voitures.find(voiture => voiture.id === voitureId);
    if (voiture) {
      res.json(voiture)
        
      }else res.status(404).json({ error: 'not found .' });

      res.json(voiture);

})

router.put('/:id',(req,res)=>{
    const voitureId = parseInt(req.params.id);
    const nvoiture  = req.body;
    const voitureIndex = voitures.findIndex(voiture => voiture.id === voitureId);
    if (voitureIndex === -1) {
        return res.status(404).json({ error: 'not found.' });
      
      }else voitures[voitureIndex] = nvoiture;

      

      
      res.json(voitures[voitureIndex]);
    })

    router.delete('/:id',(req,res)=>{
        const voitureId = parseInt(req.params.id);

       
        const voitureIndex = voitures.findIndex(voiture => voiture.id === voitureId);
      
        
        if (voitureIndex === -1) {
          return res.status(404).json({ error: 'Voiture non trouvée.' });
        }
      
      
        const deletedVoiture = voitures.splice(voitureIndex, 1)[0];
      
        
        res.json(deletedVoiture);
    
    })
    




module.exports = router;