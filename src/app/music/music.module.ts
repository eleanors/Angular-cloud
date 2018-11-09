import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoggerService } from '../logger.service'
import { MusicDirective } from './music.directive'

@NgModule({
    // id: 'MusicModle',
    declarations: [MusicDirective],
    imports: [CommonModule],
    exports: [MusicDirective],
    providers: [LoggerService]
})
export class MusicModule {
    log: LoggerService

    constructor(log: LoggerService) {
        this.log = log
    }
}
