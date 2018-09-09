const connection = require('../db-config/mysqlConnection');

const QueryDict = {
    queryEnglish(word, callback){
        connection.query(
            `SELECT d.def_id, d.gloss, r.reb, r.re_pri, k.keb
            FROM definitions d
            INNER JOIN readings r ON d.ent_seq = r.ent_seq
            INNER JOIN kanji k ON d.ent_seq = k.ent_seq
            WHERE gloss="${word}";`, function(err, res, fields){
              if (err) throw err;
              console.log("Query Success!");
              callback(res);
            }
        );
    },
    expandData(def_id, callback){
        connection.query(`
        SELECT definitions.gloss FROM definitions WHERE
	    ent_seq = (SELECT definitions.ent_seq
	    FROM definitions 
	    WHERE def_id = ${def_id}); `, function(err, res, fields){
            if (err) throw err;
            console.log("Additional Data Fetch Success!")
            callback(res);
        })

    },
    
    queryKanji(){
        console.log("doin more shit")
    }
}
module.exports = QueryDict;