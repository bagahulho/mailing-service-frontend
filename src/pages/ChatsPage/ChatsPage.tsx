// src/pages/ChatsPage/ChatsPage.tsx
import { Chat } from "../../modules/types.ts";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterName } from "../../store/slices/filterSlice";
import { RootState } from "../../store";
import { Chats_Mock } from "../../modules/mock.ts";
import ChatCard from "../../components/ChatCard/ChatCard.tsx";
import "./ChatsPage.css";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs.tsx";
import { ROUTE_LABELS, ROUTES } from "../../Routes.tsx";

const ChatsPage = () => {
    const dispatch = useDispatch();
    const name = useSelector((state: RootState) => state.filter.name); // Достаем значение фильтра из Redux
    const [chats, setChats] = useState<Chat[]>([]);
    const [isMock, setIsMock] = useState(false);
    const [cartCount, setCount] = useState(0);
    const [draftID, setDraftID] = useState(0);

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/chats?name=${name.toLowerCase()}`, { signal: AbortSignal.timeout(5000) });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();

            const chatsWithProperCase = result.chats.map((chat: any) => ({
                id: chat.ID,
                img: chat.Img,
                name: chat.Name,
                info: chat.Info,
                nickname: chat.Nickname,
                friends: chat.Friends,
                subscribers: chat.Subscribers
            }));

            setChats(chatsWithProperCase);
            setCount(result.draft_count || 0);
            setDraftID(result.draft_id);
            setIsMock(false);
        } catch (error) {
            console.error("Fetch error:", error);
            if (!isMock) {
                createMocks();
            }
        }
    };

    const createMocks = () => {
        setIsMock(true);
        setChats(Chats_Mock.filter(chat => chat.name.toLowerCase().includes(name.toLowerCase())));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await fetchData();
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilterName(e.target.value)); // Обновляем значение фильтра в Redux
    };

    useEffect(() => {
        fetchData();
    }, [name]); // Перезагружаем данные при изменении фильтра

    return (
        <>
            <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.CHATS, path: ROUTES.CHATS }]} />
            <div className="cart-icon">
                {cartCount !== 0 ? (
                    <a href={`/message/${draftID}`}>
                        <svg width="40px" height="40px" viewBox="-0.5 0 25 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.00977 21.39H19.0098C20.0706 21.39 21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39"
                                stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.00977 18.39H11.0098" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1.00977 15.39H5.00977" stroke="#363853" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992" stroke="#0095FF"
                                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="cart-count">{cartCount}</span>
                    </a>
                ) : (
                    <svg width="40px" height="40px" viewBox="-0.5 0 25 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.00977 21.39H19.0098C20.0706 21.39 21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39"
                            stroke="#363853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.00977 18.39H11.0098" stroke="#0095FF" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M1.00977 15.39H5.00977" stroke="#363853" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992" stroke="#0095FF"
                              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </div>
            <div className="chats-container">
                <div className="search-bar">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Поиск"
                            value={name} // Берем значение фильтра из Redux
                            onChange={handleNameChange} // Обновляем фильтр через Redux
                        />
                    </form>
                </div>
                <div className="content">
                    {chats.map(chat => (
                        <ChatCard
                            key={chat.id}
                            chat={chat}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ChatsPage;