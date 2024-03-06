import config from "@/config"
import http from "@/utils/request"

export default {
	token: {
		url: `${config.API_URL}/token`,
		name: "登录获取TOKEN",
		post: async function(data={}){
			console.log(import.meta.env.VITE_VUE_APP_API_BASEURL)
			return await http.post(this.url, data);
		}
	}
}
