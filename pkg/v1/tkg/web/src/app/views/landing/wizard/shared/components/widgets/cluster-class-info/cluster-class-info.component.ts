// Angular imports
import { Component, Input, OnInit } from '@angular/core';
import { ContextualHelpService } from 'src/app/shared/contextual-help/contextual-help.service';

// App imports
import clusterClassData from './cluster-class-data.json';

interface ClusterClass {
    name: string,
    categories: Array<{
        name: string
        variables: Array<{
            name: string,
            description: string
        }>
    }>
};

@Component({
    selector: 'app-cluster-class-info',
    templateUrl: './cluster-class-info.component.html',
    styleUrls: ['./cluster-class-info.component.scss']
})
export class ClusterClassInfoComponent implements OnInit {
    @Input() providerType: string;

    clusterClasses: Array<ClusterClass> = [];

    constructor(
        public contextualHelpService: ContextualHelpService
    ) { }

    ngOnInit(): void {
       this.clusterClasses = clusterClassData[this.providerType.toLowerCase()];
    }

}
