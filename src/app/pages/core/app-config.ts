import { Injectable } from '@angular/core';
import { AppService } from '../../app.service';
/**
 * 应用配置信息
 *
 * @export
 * @class AppConfig
 */
export class AppConfig {

}

/**
 * 常量定义
 *
 * @export
 * @class Constants
 */
export class Constants {
    /** 重定向URL */
    static REDIRECT_URL = 'redirect_url';
    static DEFAULT_URL = '/dashboard/home';

    static USER_NAME = 'UserName';
    static ACCESS_TOKEN = 'Access-Token';
    static DEFAULT_TOKEN_NAME = 'id_token';
    static DEFAULT_HEADER_NAME = 'Authorization';
    static HEADER_PREFIX_BEARER = 'Bearer';
    static API_URL_WEB = 'api.url.web';
    static API_URL_DOWNLOAD = 'api.url.download';
    static API_URL_Monitor = 'api.url.monitor';
}
