import { environment } from './../../environments/environment';
import { Inject, forwardRef, Injectable } from '@angular/core';

import Logger from 'log4ts/build/Logger';
import LoggerConfig from 'log4ts/build/LoggerConfig';
import BasicLayout from 'log4ts/build/layouts/BasicLayout';
import ConsoleAppender from 'log4ts/build/appenders/ConsoleAppender';
import {IAppender} from 'log4ts/build/IAppender';
import {ILayout} from 'log4ts/build/ILayout';
import {LogEntry} from 'log4ts/build/LogEntry';
import {LogLevel} from 'log4ts/build/LogLevel';

/**
 * Service for console logging with log levels. Logs prints only if the log level is higher or equal to the configured log level.
 * Log levels (accending) :
 *  1. ALL
 *  2. TRACE
 *  3. DEBUG
 *  4. INFO
 *  5. WARN
 *  6. ERROR
 *  7. FATAL
 *  8. OFF
 *
 */

@Injectable()
export class LogService {

  public log: Logger;

  private appender: IAppender;
  private layout: ILayout;
  private config: LoggerConfig;
  private defaultDeep = 3;

  constructor() {
      this.layout = new BasicLayout();
      this.appender = new ConsoleAppender();
      this.appender.setLayout(this.layout);
      this.config = new LoggerConfig(this.appender);
      const level: string = environment.logLevel;
      this.config.setLevel(LogLevel[level]);
      this.log = new Logger();
      Logger.setConfig(this.config);
  }

  public get $config(): LoggerConfig {
      return this.config;
  }

  /**
 * @param {string} message  Log message to print
 * @param {any} object  Object to print
 * @param {number} deep  Depth of object printing. Default: 3
 *
 * @example
 * printInfo('Test Info', {'name':'Test'});
 *
 */
  printInfo(message: string, object?: any, deep?: number) {
    this.log.info(message, object, deep || this.defaultDeep);
  }

  public printError(message: string, object?: any, deep?: number) {
    this.log.error(message, object, deep || this.defaultDeep);
  }

  printWarn(message: string, object?: any, deep?: number) {
    this.log.warn(message, object, deep || this.defaultDeep);
  }

  printTrace(message: string, object?: any, deep?: number) {
    this.log.trace(message, object, deep || this.defaultDeep);
  }

  printDebug(message: string, object?: any, deep?: number) {
    this.log.debug(message, object, deep || this.defaultDeep);
  }

  printFatal(message: string, object?: any, deep?: number) {
    this.log.fatal(message, object, deep || this.defaultDeep);
  }

  printLog(message: string, object?: any, deep?: number) {
    this.log.log(message, object, deep || this.defaultDeep);
  }

}
