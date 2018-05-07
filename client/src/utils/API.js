import axios from "axios";

export default {
    // other
    search: function (query, beginDate, endDate) {
        console.log("API RAN")
        const authKey = "3d64f1ecc064407b94042a4568795be3";
        const beginDateString = beginDate + "0101"
        const endDateString = endDate + "1231"
        const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
        console.log(beginDate)
        console.log(beginDateString)
        console.log(endDate)
        console.log(endDateString)
        if (beginDate && endDate) {
            return axios.get(queryURLBase, {
                params: {
                    'api-key': authKey,
                    'q': query,
                    'begin_date': beginDateString,
                    'end_date': endDateString,
                }
            })
                .then(
                    console.log("DATES")
                )
        }
        else if (beginDate) {
            return axios.get(queryURLBase, {
                params: {
                    'api-key': authKey,
                    'q': query,
                    'begin_date': beginDateString,
                }
            })
                .then(
                    console.log("BEGIN DATE ONLY")
                )
        }
        else if (endDate) {
            return axios.get(queryURLBase, {
                params: {
                    'api-key': authKey,
                    'q': query,
                    'end_date': endDateString,
                }
            })
                .then(
                    console.log("END DATE ONLY")
                )
        }
        else {
            return axios.get(queryURLBase, {
                params: {
                    'api-key': authKey,
                    'q': query
                }
            })
                .then(
                    console.log("NO DATES")
                )
        }
    },
    saveArticle: function(data) {
        console.log("save article api")
        console.log(data)
        // const dataObj={data:data}
        
        return axios.post("/api/articles",data); 
    },
    getArticles:function(){
        return axios.get("/api/articles")
    },
    deleteArticle:function(data){
        console.log("DELETE ARTICLE API CALL DATA:")
        console.log(data)
        return axios.delete("/api/articles?",{data:{data:data}})
    }
};
