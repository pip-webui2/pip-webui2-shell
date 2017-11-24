import {
    NavHeaderConfig, NavMenuConfig,
    PrimaryActionsConfig, SecondaryActionsConfig,
    BreadcrumbConfig, NavIconConfig
} from 'pip-webui2-nav';

export class ShellNavManifest {
    public header?: NavHeaderConfig;
    public menu?: NavMenuConfig;
}

export class ShellAppbarManifest {
    public primaryActions?: PrimaryActionsConfig;
    public icon?: NavIconConfig;
    public secondaryActions?: SecondaryActionsConfig;
}

export class ShellManifest {
    public nav?: ShellNavManifest;
    public appbar?: ShellAppbarManifest;
}