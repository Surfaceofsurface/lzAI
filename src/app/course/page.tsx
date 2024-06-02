import React from 'react';

type ListProps = {
    items: ListItemProps[];
};

type ListItemProps = {
    href: string,
    title: string,
    dataSrc: string,
    categoryName: string,
    categoryLink: string,
    time: string,
    description: string,
};

const ListItem: React.FC<ListItemProps> = ({ href, title, dataSrc, categoryName, categoryLink, time, description }) => {
    return (
        <div className="list-grid list-grid-padding">
            <div className="list-item card">
                <div className="media media-3x2 rounded col-4 col-md-4">
                    <a className="media-content" href={href} title={title} style={{ backgroundImage: `url(${dataSrc})` }}></a>
                </div>
                <div className="list-content">
                    <div className="list-body">
                        <h2>
                            <a href={href} title={title} className="list-title text-lg overflowClip_2">{title}</a>
                        </h2>
                        <div className="list-desc d-none d-md-block text-sm text-secondary my-3">
                            <div className="overflowClip_2 ">{description}</div>
                        </div>
                    </div>
                    <div className="list-footer">
                        <div className="d-flex flex-fill align-items-center text-muted text-xs">
                            <span><i className="iconfont icon-classification"></i>
                                <a href={categoryLink}>{categoryName}</a>
                            </span>
                            <div className="flex-fill"></div>
                            <div>
                                <time className="mx-1">{time}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <div className="cat_list">
            {items.map((item, index) => (
                <ListItem key={index} {...item} />
            ))}
        </div>
    );
};

const listItems: ListItemProps[] = [
    {
        href: "https://www.chatgpt.com/",
        title: "ChatGPT",
        dataSrc: "https://www.chatgpt.com/static/images/chatgpt-og-image.png",
        categoryName: "AI Writing",
        categoryLink: "https://www.chatgpt.com/",
        time: "2021-10-13",
        description: "ChatGPT is a conversational AI model that generates human-like text. It can be used for a variety of tasks, including writing, answering questions, and more.",
    }
];

export default function ListPage() {
    return (
        <div className="content-layout">
            <div className="site-title mb-4">
                <h1 className="text-gray text-lg mb-2">
                    <i className="site-tag iconfont icon-tag icon-lg mr-1" id="ChatGPT"></i>ChatGPT
                </h1>
                <p className="text-secondary text-sm"></p>
            </div>
            <List items={listItems} />
            <div className="posts-nav"></div>
        </div>
    );
}