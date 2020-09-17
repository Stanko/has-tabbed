export interface HasTabbedOptions {
  className?: string
  triggerOnAllKeys?: boolean
}

declare module 'has-tabbed' {
  class HasTabbed {
    constructor(options:HasTabbedOptions)
  
    addEvents(): void
    removeEvents(): void
  
    private className
    private triggerOnAllKeys
    private htmlClassList
    private handleKeyDown
    private handleClick
  };

  export = HasTabbed
}
