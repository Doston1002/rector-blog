import Skeleton from "./Skeleton"

const SkeletonPost = () => {
    return (
        <div className="post container mx-auto w-[90%]">
            <Skeleton classes="title width-50" />
            <Skeleton classes="text width-100" />
            <Skeleton classes="text width-100" />
            <Skeleton classes="text width-100" />
        </div>
    )
}
export default SkeletonPost