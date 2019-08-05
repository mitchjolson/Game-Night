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
    const sqlText = 'select game_id, bgg_id, name, description, publisher, year_published, min_players, max_players, playing_time, rating from games join user_games on games.id = user_games.game_id where user_id = $1;'
    const sqlData = [req.params.id]
    pool.query(sqlText, sqlData)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log('error getting animals', error)
            res.sendStatus(500)
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;