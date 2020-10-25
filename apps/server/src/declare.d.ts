import "express"
import {UserSession as ProjectSession} from './interfaces/UserSession'

declare module 'express' {
  interface Request {
    session?: Session;
    sessionID?: string;
  }

  interface SessionData extends ProjectSession{

    cookie: SessionCookieData;
  }

  interface SessionCookieData {
    originalMaxAge: number;
    path: string;
    maxAge: number | null;
    secure?: boolean;
    httpOnly: boolean;
    domain?: string;
    expires: Date | boolean;
    sameSite?: boolean | string;
  }

  interface SessionCookie extends SessionCookieData {
    serialize(name: string, value: string): string;
  }

  interface Session extends SessionData {
    id: string;
    regenerate(callback: (err: any) => void): void;
    destroy(callback: (err: any) => void): void;
    reload(callback: (err: any) => void): void;
    save(callback: (err: any) => void): void;
    touch(): void;
    cookie: SessionCookie;
  }
}
