import { LOGIN, LIVEBIDS, MAKES, HOMESLIDER, SELLERS, USERBUYER, ADDGIFT, TICKETS, JUNKKERHISTORY, BIDDERS, BLOG, ABOUT, SELLING, BUYING, FAQ, SETTING, REFUND } from "./APIs";
import apiWorker from "./axios";


const getConfig = () => {
	return {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
		},
	};
};


const getConfigToken = (token: string) => {
	return {
		headers: {
			// 'Content-Type': '*/*',
			Accept: 'application/json',
			'X-Requested-With': 'XMLHttpRequest',
			Authorization: `Bearer ${token}`,
		},
	};
};



const handelLogin = async (password: string, email: string) => {
	try {
		const res = await apiWorker.post(`${LOGIN}`, {
			email: email,
			password: password
		}, getConfig())
		return res.data
	} catch (error: any) {
		console.log(error)
		if (error?.response.status == 404) {
			return error?.response.status
		} else {
			return null
		}
	}
}

interface GetBidsProps {
	token: string,
	status?: string,
	page?: number,
	text?: string | string[] | undefined
}


const handelGetBids = async (params: GetBidsProps) => {
	try {
		const res = await apiWorker.get(`${LIVEBIDS}`, {
			params: {
				status: params.status,
				page: params.page,
				text: params.text
			},
			headers: {
				// 'Content-Type': '*/*',
				Accept: 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				Authorization: `Bearer ${params.token}`,
			},
		})
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetMakes = async (token: string) => {
	try {
		const res = await apiWorker.get(`${MAKES}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelAddMake = async (data: FormData, token: string) => {
	try {
		const res = await apiWorker.post(`${MAKES}`,
			data
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}


const handeldeleteMake = async (token: string, id: number) => {
	try {
		const res = await apiWorker.delete(`${MAKES}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelupdateMake = async (data: FormData, token: string, id: number) => {
	try {
		const res = await apiWorker.post(`${MAKES}/${id}`,
			data
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}


const handelAddHomeSlider = async (data: FormData, token: string) => {
	try {
		const res = await apiWorker.post(`${HOMESLIDER}`,
			data
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}


const handelGetHomeSlider = async (token: string) => {
	try {
		const res = await apiWorker.get(`${HOMESLIDER}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handeldeleteHomeSlider = async (token: string, id: number) => {
	try {
		const res = await apiWorker.delete(`${HOMESLIDER}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelupdateHomeSlider = async (data: FormData, token: string, id: number) => {
	try {
		const res = await apiWorker.post(`${HOMESLIDER}/${id}`,
			data
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}

interface BuyersProps {
	token: string,
	page?: number,
	text?: string | string[] | undefined
}


const handelGetBuyer = async (params: BuyersProps) => {
	try {
		const res = await apiWorker.get(`${USERBUYER}?type=buyer`, {
			params: {
				page: params.page,
				text: params.text
			},
			headers: {
				// 'Content-Type': '*/*',
				Accept: 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				Authorization: `Bearer ${params.token}`,
			},
		})
		return res.data
	} catch (error: any) {
		return null
	}
}



const handelGetBuyerBidders = async (token: string, id: number) => {
	try {
		const res = await apiWorker.get(`${USERBUYER}/${id}/bidders`, getConfigToken(token))
		return res.data
	} catch (error) {
		return null
	}
}


interface SEllersProps {
	token: string,
	page?: number,
	text?: string | string[] | undefined
}


const handelGetSellers = async (params: SEllersProps) => {
	try {
		const res = await apiWorker.get(`${SELLERS}`, {
			params: {
				page: params.page,
				text: params.text
			},
			headers: {
				// 'Content-Type': '*/*',
				Accept: 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				Authorization: `Bearer ${params.token}`,
			},
		})
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetBuyerDetails = async (token: string, id: number) => {
	try {
		const res = await apiWorker.get(`${USERBUYER}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelChanheUserStatus = async (token: string, id: number, value: string) => {
	try {
		const res = await apiWorker.get(`${USERBUYER}/set-status/${id}/${value}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}

interface AddGiftProps {
	all_users: boolean,
	users: number[],
	amount: number,
	description: string
}

const handelAddGift = async (token: string, params: AddGiftProps) => {
	try {
		const res = await apiWorker.post(`${ADDGIFT}`,
			{
				all_users: params.all_users,
				users: params.users,
				amount: params.amount,
				description: params.description
			}
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}

interface TickestProps {
	token: string
	page?: number
}


const handelGetTickets = async (params: TickestProps) => {
	try {
		const res = await apiWorker.get(`${TICKETS}`, {
			params: {
				page: params.page,
			},
			headers: {
				// 'Content-Type': '*/*',
				Accept: 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				Authorization: `Bearer ${params.token}`,
			},
		})
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetTicketsDetails = async (token: string, id: number) => {
	try {
		const res = await apiWorker.get(`${TICKETS}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelChangeTicketStatus = async (token: string, id: number, value: string) => {
	try {
		const res = await apiWorker.get(`${TICKETS}/set-status/${id}/${value}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelAddComment = async (token: string, id: number, body: string) => {
	try {
		const res = await apiWorker.post(`${TICKETS}/comments/${id}`,
			{ body: body }
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}


const handelGetJunkkersHistory = async (token: string, id: number) => {
	try {
		const res = await apiWorker.get(`${JUNKKERHISTORY}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelGetBidders = async (token: string, id: number) => {
	try {
		const res = await apiWorker.get(`${BIDDERS}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}

interface AddBlogProps {
	title: boolean,
	users: number[],
	amount: number,
	description: string
}


const handelAddBlog = async (token: string, data: FormData) => {
	try {
		const res = await apiWorker.post(`${BLOG}`,
			data
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}


const handelGetBlog = async (token: string) => {
	try {
		const res = await apiWorker.get(`${BLOG}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelupdateBlog = async (data: FormData, token: string, id: number) => {
	try {
		const res = await apiWorker.post(`${BLOG}/${id}`,
			data
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}


const handelGetBlogDetails = async (token: string, id: number) => {
	try {
		const res = await apiWorker.get(`${BLOG}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handeldeleteBlog = async (token: string, id: number) => {
	try {
		const res = await apiWorker.delete(`${BLOG}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelGetAbouPage = async (token: string) => {
	try {
		const res = await apiWorker.get(`${ABOUT}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelUpdateAbouPage = async (token: string, data: FormData) => {
	try {
		const res = await apiWorker.post(`${ABOUT}`, data, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetSellingPage = async (token: string) => {
	try {
		const res = await apiWorker.get(`${SELLING}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelUpdateSellingPage = async (token: string, data: FormData) => {
	try {
		const res = await apiWorker.post(`${SELLING}`, data, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetBuyingPage = async (token: string) => {
	try {
		const res = await apiWorker.get(`${BUYING}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelUpdateBuyingPage = async (token: string, data: FormData) => {
	try {
		const res = await apiWorker.post(`${BUYING}`, data, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetFaq = async (token: string) => {
	try {
		const res = await apiWorker.get(`${FAQ}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelAddFaq = async (token: string, data: FormData) => {
	try {
		const res = await apiWorker.post(`${FAQ}`,
			data
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}

const handelupdateFaq = async (data: FormData, token: string, id: number) => {
	try {
		const res = await apiWorker.post(`${FAQ}/${id}`,
			data
			, getConfigToken(token))
		return res.data
	} catch (error: any) {
		console.log(error)
		return null
	}
}


const handeldeleteFaq = async (token: string, id: number) => {
	try {
		const res = await apiWorker.delete(`${FAQ}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetSitting = async (token: string) => {
	try {
		const res = await apiWorker.get(`${SETTING}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelUpdateSitting = async (token: string, data: FormData) => {
	try {
		const res = await apiWorker.post(`${SETTING}`, data, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelRefundBid = async (token: string, id: number) => {
	try {
		const res = await apiWorker.get(`${REFUND}/${id}`, getConfigToken(token))
		return res.data
	} catch (error: any) {
		return null
	}
}


export {
	handelLogin, handelGetBids, handelGetMakes, handelAddMake, handeldeleteMake, handelupdateMake, handelAddHomeSlider, handelGetHomeSlider, handeldeleteHomeSlider, handelupdateHomeSlider, handelGetBuyer, handelGetSellers, handelGetBuyerDetails, handelChanheUserStatus, handelAddGift, handelGetTickets, handelGetTicketsDetails, handelChangeTicketStatus, handelAddComment, handelGetJunkkersHistory, handelGetBidders, handelAddBlog, handelGetBlog, handelupdateBlog, handelGetBlogDetails, handeldeleteBlog, handelGetAbouPage, handelUpdateAbouPage, handelGetSellingPage,
	handelUpdateSellingPage, handelGetBuyingPage, handelUpdateBuyingPage, handelGetFaq, handelAddFaq, handelupdateFaq, handeldeleteFaq, handelGetSitting, handelUpdateSitting, handelGetBuyerBidders, handelRefundBid
};