import Post from '../../models/post'

export const write = async ctx => {
    const { _id,
        platform,
        channelId,
        imgDataSrc,
        liveDataHref,
        liveDataTitle,
        creatorDataHref,
        creatorDataName,
        liveAttdc,
        onLive
        } = ctx.request.body;
    const post = new Post({
        _id,
        platform,
        channelId,
        imgDataSrc,
        liveDataHref,
        liveDataTitle,
        creatorDataHref,
        creatorDataName,
        liveAttdc,
        onLive
    });
    try {
        await post.save();
        ctx.body = post;
    } catch ( error ) {
        try {
            console.log(ctx.request.body._id)
            await Post.findByIdAndUpdate({"_id":  _id}, ctx.request.body, {
                new: true,
            }).exec();
            if(!post) {
                ctx.status = 404;
                return;
            }
            ctx.body = post;
        } catch ( e ) {
            ctx.throw(500, e)
        }
       
    }

};

export const list = async ctx => {

    const page = parseInt(ctx.query.page || '1', 10);

    if (page < 1) {
        ctx.status = 400;
        return;
    }

    try {
        const posts = await Post.find({"onLive":true})
        .sort({_id: -1})
        .limit(12)
        .skip((page - 1)* 10)
        .exec();
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body=posts;
        
    } catch (e) {
        ctx.throw(500, e)
    }
};

export const read = ctx => {};

export const remove = ctx => {};

export const update = ctx => {};