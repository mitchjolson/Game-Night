const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('getting games for user, req.params.id is:', req.params.id)
    const sqlText = 'select games.id, atlas_id, name, description, publisher, year_published, min_players, max_players, playtime, category, rating from games join user_games on games.atlas_id = user_games.game_id where user_id = $1;'
    const sqlData = [req.params.id]
    pool.query(sqlText, sqlData)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('error getting collection', error);
            res.sendStatus(500)
        })
});

router.post('/:id', (req, res) => {
    const sqlText = 'insert into games (atlas_id, name, description, publisher, year_published, min_players, max_players, playtime, category, rating) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);';
    const sqlValues = [req.body.id, req.body.name, req.body.description, req.body.publishers[0], req.body.year_published, req.body.min_players, req.body.max_players, req.body.max_playtime, req.body.categories[0].id, req.body.average_user_rating];
    pool.query(sqlText, sqlValues)
        .then((response) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('error posting game', error)
            res.sendStatus(500)
        })
})

router.post('/link/:id', (req, res) => {
    const sqlText = 'insert into user_games (user_id, game_id) values ($1, $2);';
    const sqlValues = [req.params.id, req.body.id];
    pool.query(sqlText, sqlValues)
        .then((response) => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('error linking game', error)
            res.sendStatus(500)
        })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;