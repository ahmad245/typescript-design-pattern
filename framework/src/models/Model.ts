import { IModelAttributes } from '../interfaces/ModelAttributes';
import { IEvents } from '../interfaces/Events';
import { IHasId } from '../interfaces/HasId';
import { ISync } from '../interfaces/Sync';

export class Model<T extends IHasId> {

    constructor(
        public attrs: IModelAttributes<T>,
        public event: IEvents,
        public sync: ISync<T>
    ) { }



    getAll = this.attrs.getAll;
    get = this.attrs.get;
    set(update: T): void {
        this.attrs.set(update);
        this.event.trigger('change');
      }

    on = this.event.on;
    trigger = this.event.trigger;

    fetch() {
        const id = this.attrs.get('id');
        this.sync.fetch(id).then((response) => {
            this.set(response.data);
        })
    }
    save() {
        this.sync.save(this.attrs.getAll()).then((response)=>{
           
            this.trigger('save')
        }).catch(()=>{
            this.trigger('error')
        })

    }
}