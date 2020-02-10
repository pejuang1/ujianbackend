const {mysqldb} = require ('../connection')
// const {uploader} = require ('../helper/uploader')
const fs = require('fs')

module.exports={
    postmovie:(req,res)=>{
        var sql=`insert into movies set ?`;
        mysqldb.query(sql,req.body,(err,result)=>{
            if (err) return res.status(500).send(err)
            console.log('masuk')
            sql=`select * from movies`;
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
    deletemovie:(req,res)=>{
        var {id}=req.body
        var sql = `delete from movies where id=${id}`
        try {
            mysqldb.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    },
    deletecategories:(req,res)=>{
        var {id}=req.body
        var sql = `delete from categories where id=${id}`
        try {
            mysqldb.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    },
    
    editcategory:(req,res)=>{
        var sql = `select * from categories`
        var {id,nama}=req.body
        sql = `update categories set nama='${nama}' where id=${id}`
        try {
            mysqldb.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    },
    editmovie:(req,res)=>{
        var sql = `select * from movies`
        var {id,nama,tahun,description}=req.body
        sql = `update movies set nama='${nama}', tahun=${tahun}, description='${description}' where id=${id}`
        try {
            mysqldb.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    },
    postcategories:(req,res)=>{
        var sql=`insert into categories set ?`;
        mysqldb.query(sql,req.body,(err,result)=>{
            if (err) return res.status(500).send(err)
            console.log('masuk')
            sql=`select * from categories`;
            mysqldb.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                return res.status(200).send(result1)
            })
        })
    },
    deleteconnectmoviecategory:(req,res)=>{
        var {idmovie,idcategory}=req.body
        var sql = `delete from movcat where idmovie=${idmovie} and idcategory=${idcategory}`
        try {
            mysqldb.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result);
                res.send(result)
            })
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    },
    addconnectmoviecategory:(req,res)=>{
        var {idmovie,idcategory}=req.body
        var sql=`select movies.nama as namamovie,categories.nama as namacategory from movcat join movies on movcat.idmovie=movies.id
        join categories on movcat.idcategory=categories.id where idmovie=${idmovie} and idcategory=${idcategory}`;
        var sql2 = `insert into movcat values (${idmovie},${idcategory})`
        try {
            
            mysqldb.query(sql,(err,result)=>{
                if(err) throw err
                console.log(result)
                if(result.length>0){
                    res.send(result)
                }else{
                    mysqldb.query(sql2,(err,result)=>{
                        if(err) throw err
                        console.log(result);
                        res.send(result)
                    })
                }
            })      
        } catch (error) {
            console.log(error);
            res.send(error)
        }
        
    },
    
}