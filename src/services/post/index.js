import { useState } from "react"
import useClient, { prefix }from "../rest-client"

export const usePostService = () => {
    const collection = `${prefix}_posts`
    const client = useClient()
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        if (loading) return
        setLoading(true)
        return client.get(collection,{
            params: {
                sort: '-timestamp'
            }
        }).then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }
    const createPosts = async (post) => {
        if (loading) return
        setLoading(true)
        return client.post(collection, { post, timestamp: new Date() }).then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }
    const deletePosts = async (id) => {
        if (loading) return
        setLoading(true)
        return client.delete(`${collection}/id/${id}`).then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }
    const updatePosts = async (id, post) => {
        if (loading) return
        setLoading(true)
        return client.put(`/collection/id/${id}`, post ).then((response) => {
            return response.data
        }).finally(() => {
            setLoading(false)
        })
    }
    return {getPosts, createPosts, deletePosts, updatePosts, loading}
}
export default usePostService