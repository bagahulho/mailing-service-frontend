/* tslint:disable */
/* eslint-disable */
/**
 * Mailing app
 * my api
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  DsChat,
  DsChatRequest,
  DsChatResponse,
  DsErrorResp,
  DsGetChatsResponse,
  DsOkResp,
} from '../models/index';
import {
    DsChatFromJSON,
    DsChatToJSON,
    DsChatRequestFromJSON,
    DsChatRequestToJSON,
    DsChatResponseFromJSON,
    DsChatResponseToJSON,
    DsErrorRespFromJSON,
    DsErrorRespToJSON,
    DsGetChatsResponseFromJSON,
    DsGetChatsResponseToJSON,
    DsOkRespFromJSON,
    DsOkRespToJSON,
} from '../models/index';

export interface ChatIdInMessagePostRequest {
    id: number;
}

export interface ChatsCreatePostRequest {
    chat: DsChatRequest;
}

export interface ChatsGetRequest {
    name?: string;
}

export interface ChatsIdDeleteRequest {
    id: number;
}

export interface ChatsIdGetRequest {
    id: number;
}

export interface ChatsIdNewImagePostRequest {
    id: number;
    image: Blob;
}

export interface ChatsIdPutRequest {
    id: number;
    chat: DsChatRequest;
}

/**
 * 
 */
export class ChatsApi extends runtime.BaseAPI {

    /**
     * Добавляет чат к конкретному сообщению.
     * Добавить чат в сообщение
     */
    async chatIdInMessagePostRaw(requestParameters: ChatIdInMessagePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DsOkResp>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling chatIdInMessagePost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/chat/{id}/in-message`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DsOkRespFromJSON(jsonValue));
    }

    /**
     * Добавляет чат к конкретному сообщению.
     * Добавить чат в сообщение
     */
    async chatIdInMessagePost(requestParameters: ChatIdInMessagePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DsOkResp> {
        const response = await this.chatIdInMessagePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Создает новый чат с указанными данными.
     * Создать новый чат
     */
    async chatsCreatePostRaw(requestParameters: ChatsCreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DsChat>> {
        if (requestParameters['chat'] == null) {
            throw new runtime.RequiredError(
                'chat',
                'Required parameter "chat" was null or undefined when calling chatsCreatePost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/chats/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DsChatRequestToJSON(requestParameters['chat']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DsChatFromJSON(jsonValue));
    }

    /**
     * Создает новый чат с указанными данными.
     * Создать новый чат
     */
    async chatsCreatePost(requestParameters: ChatsCreatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DsChat> {
        const response = await this.chatsCreatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Возвращает список чатов для конкретного пользователя с указанием черновиков.
     */
    async chatsGetRaw(requestParameters: ChatsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DsGetChatsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DsGetChatsResponseFromJSON(jsonValue));
    }

    /**
     * Возвращает список чатов для конкретного пользователя с указанием черновиков.
     */
    async chatsGet(requestParameters: ChatsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DsGetChatsResponse> {
        const response = await this.chatsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Удаляет чат по его ID и удаляет изображение из Minio.
     * Удалить чат
     */
    async chatsIdDeleteRaw(requestParameters: ChatsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DsOkResp>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling chatsIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/chats/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DsOkRespFromJSON(jsonValue));
    }

    /**
     * Удаляет чат по его ID и удаляет изображение из Minio.
     * Удалить чат
     */
    async chatsIdDelete(requestParameters: ChatsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DsOkResp> {
        const response = await this.chatsIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Возвращает информацию о чате по его ID.
     * Получить чат по ID
     */
    async chatsIdGetRaw(requestParameters: ChatsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DsChatResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling chatsIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chats/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DsChatResponseFromJSON(jsonValue));
    }

    /**
     * Возвращает информацию о чате по его ID.
     * Получить чат по ID
     */
    async chatsIdGet(requestParameters: ChatsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DsChatResponse> {
        const response = await this.chatsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Загружает и заменяет изображение чата.
     * Заменить изображение чата
     */
    async chatsIdNewImagePostRaw(requestParameters: ChatsIdNewImagePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DsOkResp>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling chatsIdNewImagePost().'
            );
        }

        if (requestParameters['image'] == null) {
            throw new runtime.RequiredError(
                'image',
                'Required parameter "image" was null or undefined when calling chatsIdNewImagePost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['image'] != null) {
            formParams.append('image', requestParameters['image'] as any);
        }

        const response = await this.request({
            path: `/chats/{id}/new-image`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DsOkRespFromJSON(jsonValue));
    }

    /**
     * Загружает и заменяет изображение чата.
     * Заменить изображение чата
     */
    async chatsIdNewImagePost(requestParameters: ChatsIdNewImagePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DsOkResp> {
        const response = await this.chatsIdNewImagePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Обновляет данные существующего чата.
     * Обновить чат
     */
    async chatsIdPutRaw(requestParameters: ChatsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DsChat>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling chatsIdPut().'
            );
        }

        if (requestParameters['chat'] == null) {
            throw new runtime.RequiredError(
                'chat',
                'Required parameter "chat" was null or undefined when calling chatsIdPut().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/chats/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DsChatRequestToJSON(requestParameters['chat']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DsChatFromJSON(jsonValue));
    }

    /**
     * Обновляет данные существующего чата.
     * Обновить чат
     */
    async chatsIdPut(requestParameters: ChatsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DsChat> {
        const response = await this.chatsIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}